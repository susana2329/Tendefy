const usuarioService = require('../service/usuario.service');

exports.getPerfil = async (req, res) =>{
    try{
        const id = req.params.id;
        console.log("CONTROLLER - getPerfil por Id", id);
        const usuarioEncontrado = await usuarioService.getUsuarioById(id);

        if (!usuarioEncontrado){
            return res.status(400).send(`No fue posible encontrar un usuario con ese ID`);
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(usuarioEncontrado));
    }catch(error){
        console.log("Error en Controller getperfil", error);
        res.status(500).send({
            code:500,
            message: "Error al obtener el perfil del usuario"
        });
    }
};

//prueba
exports.createUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await usuarioService.registrarUsuario(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.log("Error - CONTROLLER createUsuario", error)
        res.status(400).json({ mensaje: error.message });
    }
}

