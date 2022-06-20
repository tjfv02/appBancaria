const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');

router.post(
    '/signup',
    [
        body('usuario').trim().not().isEmpty(),
        body('name').trim().not().isEmpty(),
        body('email').isEmail().withMessage('Porfavor ingrese un email valido.')
        .custom(async (email) => {
            const user = await User.buscar(email);
            if(user[0].length > 0) {
                return Promise.reject('La direccion de correo ya existe')
            }
        })
        .normalizeEmail(),
        body('password').trim().isLength({min: 5 }),
        body('fechaNac').trim().isLength({min: 2 }),
        body('direccion').trim().isLength({min: 2 }),
        body('telefono').trim().isLength({min: 2 }),
    ], authController.signup
);

router.post('/login', authController.login);
module.exports = router;

// router.post("/signupRoches", (req,res,next)=> {

//     var json  = req.body
//     var result = validarCampos(json)
//     res.send(result)
// })

// router.post("/login", async (req,res,next) => {

//     const user = await User.buscar(req.body.email);
//     if(user[0].length != 0) {
//         //la cuenta si existe
//         console.log("El correo si existe")
//         var result = user[0][0];

//         if  (result.password == req.body.password)
//         {
//             // permitir el login
//             console.log("Simona entrastess")
//             res.send("Login Correcto")
//         }else 
//         {
//             // password erronea
//             res.send("password erronea")
//         }
//     }
//     else
//     {
//         res.send('La direccion de correo ya existe')
//     }
// })

// const validarCampos = async (body) =>
// {

//     if(body.name.trim().length == 0)
//     {
//         return Promise.reject(false)
//     }
//     //VALIDAR REGEX DEL CORREO
    
//     // VALIDARIA REGEX PASSWORD las passwords las gruadar cifradas, puedeser SHA12 o BASE64
//     const user = await User.buscar(body.email);

//     if(user[0].length > 0) {
//         //ya existe la cuenta
//         return ('La direccion de correo ya existe')
//     }

//     try {
//         //instert para crear la cuenta
//         User.guardar(body)
//         return "Exito"
//     } catch (error) {
//         console.log(error)
//         return "Error al guardar"
//     }

//     // 
// }

