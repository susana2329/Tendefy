const { editProfileUpdate } = require(`../repository/editProfile.repository`)
const { getProfile } = require(`../repository/editProfile.repository`)
const {subirFotoCloudinary} = require(`../service/cloudinary.service`)
const Usuarios = require("../repository/model/usuario")
exports.editProfileService = async (fotoPerfil, arrayFotos) => {
    try {
        let userEditado = { 
            avatarUrl: fotoPerfil, 
            fotos: arrayFotos
        }
        if(userEditado.avatarUrl){
            userEditado = await subirFotoCloudinary(userEditado.avatarUrl.path, `foto-cards`)
        }
        if(userEditado.fotos){
            for (let i = 0; i < userEditado.fotos.length; i++) {
                const foto = userEditado.fotos[i]
                const result = await subirFotoCloudinary(foto.path, `fotos-cards`)
                userEditado.fotos = result
            }
        }
        
        return userEditado
    }
    catch (error) {
        console.log(`Hubo un error en los servicios: ${error}`)
    }

}

exports.getProfileService = async (id) => {
    try {
        const profile = await getProfile(id)
        return profile
    } catch (error) {
        console.log(`Hubo un error en el service ${error}`)
    }
}