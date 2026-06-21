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

// exports.registrarUsuario= async (datosUsuario) => {
//     return await usuarioRepository.crearUsuario(datosUsuario);
    
// }
const usuarioRepository = require('../repository/usuario.repository');

exports.getUsuarioById = async (id) => {
    try {
        console.log("SERVICE - getUsuarioById");
        let usuario = await usuarioRepository.findUsuarioById(id)
        console.log(usuario)
        return usuario
    } catch (error) {
        console.log("Error al getUsuarioById()", error);
    }
};

/*//prueba
exports.registrarUsuario= async (datosUsuario) => {
    return await usuarioRepository.crearUsuario(datosUsuario);
    
}
*/
