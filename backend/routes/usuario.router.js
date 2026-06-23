const express = require('express')
const usuarioController = require('../controllers/usuario.controller')
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/:id', usuarioController.getPerfil)
router.get('/perfil/:id', authMiddleware, usuarioController.getPerfil);
router.get('/perfil/:id/spotify', authMiddleware, usuarioController.getPerfilSpotify);
module.exports = router