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
// //prueba
// exports.createUsuario = async (req, res) => {
//     try {
//         const nuevoUsuario = await usuarioService.registrarUsuario(req.body);
//         res.status(201).json(nuevoUsuario);
//     } catch (error) {
//         console.log("Error - CONTROLLER createUsuario", error)
//         res.status(400).json({ mensaje: error.message });
//     }
// }