const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller');

router.get('/perfil/:id', usuarioController.getPerfil);
router.get('/perfil/:id/spotify', usuarioController.getPerfilSpotify);
router.patch('/perfil/:id', usuarioController.updatePerfil);

module.exports = router;
