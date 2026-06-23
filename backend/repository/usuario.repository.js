const Users = require('./model/usuario')

exports.obtenerUsuarioPorId = async (id) => {
    try {
        return await Users.findById(id).lean();
    } catch (error) {
        console.error("Error en Repository obtenerUsuarioPorId:", error);
        throw error;
    }
};