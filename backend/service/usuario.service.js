const usuarioRepository = require('../repository/usuario.repository')
/*
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
*/
exports.getUsuarioById = async (id) => {
    try {
        console.log("SERVICE - getUsuarioById");
        let usuario = await usuarioRepository.findUsuarioById(id)
        console.log(usuario)
        return usuario
    } catch (error) {
        console.log("Error al getUsuarioById()", error);
        throw error
    }
};

exports.getPerfilSpotify = async (id) => {
    try {
        const usuario = await usuarioRepository.findUsuarioById(id);

        return {
            topArtistas: usuario.topArtistas.filter((_, index) => index < 4),
            topCanciones: usuario.topCanciones.filter((_, index) => index < 5)
        };
    } catch (error) {
        console.log("Error al getUsuarioById()", error);
    }
};

/*//prueba
exports.registrarUsuario= async (datosUsuario) => {
    return await usuarioRepository.crearUsuario(datosUsuario);
}
*/
