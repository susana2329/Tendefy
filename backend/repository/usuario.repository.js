const { getMongoDBConnection } = require('../database/conexion.js');
const Usuarios = require('./model/usuario.js');

getMongoDBConnection();

exports.findUsuarioById = async (id) => {
    try {
        return await Usuarios.findById(id).lean();
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