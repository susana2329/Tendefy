const usuarios = require(`./model/usuario.js`)
const {getMongoDBConnection} = require(`../database/conexion`)

getMongoDBConnection()



exports.editProfileUpdate = async(id,usuario) =>  {
    try{
        const result = await usuarios.findByIdUpdate(id, usuario)
        console.log(result)
        if(!result){ 
            console.log("Hubo un problema cuando se intento guardar las actualizaciones") 
            return null
        }
        return result
    }
    catch(error) {
        console.log(`Ocurrio un error: ${error}`)
        
    }
}