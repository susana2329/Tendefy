const Users = require('./model/usuario')
/*
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
const { getMongoDBConnection } = require('../database/conexion.js');
const Usuarios = require('./model/usuario.js');

getMongoDBConnection();
*/
exports.findUsuarioById = async (id) => {
    try {
        return await Users.findById(id).lean();
    } catch (error) {
        console.error("Error en Repository findUsuarioById:", error);
        throw error;
    }
};

/*// prueba
exports.crearUsuario = async (datosUsuario) => {
    const nuevoUsuario = new Usuarios(datosUsuario); 
    return await nuevoUsuario.save();
}
*/
