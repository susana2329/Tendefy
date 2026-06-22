const Usuario = require('./model/usuario')

exports.obtenerUsuarioPorId = async (id) => {
    try {
        return await Usuario.findById(id).lean();
    } catch (error) {
        console.error("Error en Repository obtenerUsuarioPorId:", error);
    }
}