const {validationResult} = require('express-validator');

const bcrypt = require('bcryptjs');

const User = require('../models/user');

const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if(errors.isEmpty()) return
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const usuario = req.body.usuario;
    const fechaNac = req.body.fechaNac;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;



    try {
        const hashedPassword = await bcrypt.hash(password, 12)

        const userDetails = {
            usuario: usuario,
            name: name,
            email: email,
            password: hashedPassword,
            fechaNac: fechaNac,
            direccion: direccion,
            telefono: telefono,
        }

        const result = await User.guardar(userDetails);

        res.status(201).json({ message: 'usuario registrado'})
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;


    try {

        const user = await User.buscar(email);

        if (user[0].length !== 1) {
            const error = new Error('Usuario no encontrado')
            error.statusCode = 401;
            throw error;
        }

        const storedUser = user[0][0]; //  usuario: cjazurdia
        const isEqual = await bcrypt.compare(password, storedUser.password);

        if (!isEqual){
            const error = new Error('Contrasenia incorrecta');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign(
            {
                email: storedUser.email,
                userId: storedUser.id
            },
            'secretfortoken',
            {expiresIn: '1h'}
        );

        res.status(200).json({ token: token, userId: storedUser.id})

    } catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
    
}