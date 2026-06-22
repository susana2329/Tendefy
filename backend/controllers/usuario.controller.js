const usuarioService = require('../service/usuario.service')

exports.readUsuarioById = async (req, res) => {
    try {
        const idParam = req.params.id;
        console.log("CONTROLLER - readUsuarioById - id:", idParam)

        const usuario = await usuarioService.getUsuarioById(idParam)

        if (!usuario) {
            return res.status(404).send(`No se encontró un usuario con el id: ${idParam}`)
        }

        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(usuario))

    } catch (error) {
        console.log("Error - CONTROLLER readUsuarioById", error)
        res.status(500).send({
            code: 500,
            message: "Error al obtener el usuario"
        })
    }
}
          
exports.getPerfilSpotify = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("CONTROLLER - getPerfilSpotify por ID", id);
        const usuarioEncontrado = await usuarioService.getUsuarioById(id);

        if (!usuarioEncontrado) {
            return res.status(404).send(`No se encontro un usuario con ese ID`);
        }
        const datosSpotify = {
            topArtistas: usuarioEncontrado.topArtists,
            topCanciones: usuarioEncontrado.topTracks
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(datosSpotify));
    } catch (error) {
        console.log("Erro en Controller getPerfilSpotify", error);
        res.status(500).send({
            code: 500,
            message: "Error al obtener el perfil de Spotify"
        })
    }
}

