const Usuarios = require(`./model/usuario.js`)
const { getMongoDBConnection } = require(`../database/conexion`)

getMongoDBConnection(); 



    exports.editProfileUpdate = async (id, usuario) => {
        try {
            console.log(usuario)
            console.log(id)
            const result = await Usuarios.findByIdAndUpdate(id, usuario,  { new: true  })
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