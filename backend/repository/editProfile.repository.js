const Usuarios = require(`./model/usuario.js`)
const { getMongoDBConnection } = require(`../database/conexion`)

    exports.editProfileUpdate = async (id, usuario) => {
        try {
            const result = await Usuarios.findByIdAndUpdate(id, usuario,  { returnDocument:`after`  })
            if (!result) {
                console.log("Hubo un problema cuando se intento guardar las actualizaciones")
                return null
            }
            return result
            console.log(JSON.stringify(result))
        }
        catch (error) {
            console.log(`Ocurrio un error: ${error}`)

        }
    }

exports.getProfile = async (id) => { 
    try{
        const result = await Usuarios.findById(id)
        return JSON.stringify(result)
        
    }
    catch(error){
        console.log(`Hubo un error con la busqueda del usuario ${error}`)
    }
}