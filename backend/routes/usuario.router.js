const express = require('express')
const usuarioController = require('../controllers/usuario.controller')
const router = express.Router();


router.get('/:id', usuarioController.readUsuarioById)

module.exports = router