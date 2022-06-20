const express = require('express');

const { body } = require('express-validator');

const postsController = require('../controllers/posts');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, postsController.fetchAll);

router.post(
    '/',
    [
        auth,//se coloco aqui porque valida si el usuario esta loggeado
        body('noCuenta').trim().isLength({min: 2}).not().isEmpty(),
        body('estado').trim().isLength({min: 2}).not().isEmpty(),
        body('tipo').trim().isLength({min: 2}).not().isEmpty(),
        body('monto').trim().isLength({min: 2}).not().isEmpty(),
    ], postsController.postPost
);

router.delete('/:id', auth, postsController.deletePost);
module.exports = router;