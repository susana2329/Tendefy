const usuarioService = require('../service/usuario.service');

exports.getPerfil = async (req, res) => {
    try {
        const id = req.params.id;

        const usuario = await usuarioService.getUsuarioById(id);

        if (!usuario) {
            return res.status(404).send({
                message: "No se encontró usuario"
            });
        }

        return res.status(200).json(usuario);

    } catch (error) {
        console.log("Error getPerfil", error);

        return res.status(500).send({
            code: 500,
            message: "Error al obtener perfil"
        });
    }
};


exports.getPerfilSpotify = async (req, res) => {
    try {
        const id = req.params.id;

        const spotifyData = await usuarioService.getPerfilSpotify(id);

        if (!spotifyData) {
            return res.status(404).send({
                message: "No se encontraron datos Spotify"
            });
        }

        return res.status(200).json(spotifyData);

    } catch (error) {
        console.log("Error getPerfilSpotify", error);

        return res.status(500).send({
            code: 500,
            message: "Error al obtener Spotify"
        });
    }
};

