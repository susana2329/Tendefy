const express = require('express')
const usuarioController = require('../controllers/usuario.controllers')
const router = express.Router();


router.get('/:id', usuarioController.readUsuarioById)
// router.post('/', usuarioController.createUsuario)
module.exports = router
