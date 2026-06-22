const usuarioRepository = require('../repository/usuario.repository')

exports.getUsuarioById = async (id) => {
    try {
        console.log("SERVICE - getUsuarioById")
        let usuario = await usuarioRepository.obtenerUsuarioPorId(id)
        console.log(usuario)
        return usuario
    } catch (error) {
        console.log("Error en getUsuarioById()", error)
    }
}


