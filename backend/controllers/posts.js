const {validationResult} = require('express-validator');


const Post = require('../models/posts');


exports.fetchAll = async (req, res, next) => {
    try {
        const allPosts = await Post.fetchAll();
        res.status(200).json(allPosts);
    } catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.postPost = async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) return
    
    const noCuenta = req.body.noCuenta;
    const estado = req.body.estado;
    const tipo = req.body.tipo;
    const monto = req.body.monto;



    try {

        const postDetails = {
            noCuenta: noCuenta,
            estado: estado,
            tipo: tipo,
            monto: monto,
        }

        const result = await Post.guardar(postDetails);

        res.status(201).json({ message: 'cuenta registrada'})
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const deleteResponse = await Post.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}
