const Usuario = require('./model/usuario')

exports.obtenerUsuarioPorId = async (id) => {
    try {
        return await Usuario.findById(id).lean();
    } catch (error) {
        console.error("Error en Repository obtenerUsuarioPorId:", error);
    }
}
// //pruebas para que el get tire algo
// exports.crearUsuario = async (datosUsuario) => {
//     const nuevoUsuario = new Usuario(datosUsuario);
//     return await nuevoUsuario.save();
// }