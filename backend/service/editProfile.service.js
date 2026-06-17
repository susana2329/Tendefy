const { editProfileUpdate } = require(`../repository/editProfile.repository`)



exports.editProfileService = async (id, usuario) => {
    try {
        if(!id){ 
            console.log("Error no se puedo identificar al usuario en la base de datos")
        }
        else{ 
            return result = await editProfileUpdate(id, usuairo)
        }

    }
    catch (error) {
        console.log(`Hubo un error en los servicios: ${error}`)
    }

}