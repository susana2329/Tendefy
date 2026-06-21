const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/perfil/:id',authMiddleware, usuarioController.getPerfil);
router.get('/perfil/:id/spotify',authMiddleware, usuarioController.getPerfilSpotify);

/*//prueba
router.post('/', usuarioController.createUsuario)
*/
module.exports = router;
