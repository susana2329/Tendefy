const { editProfileUpdate } = require(`../repository/editProfile.repository`)
const { getProfile } = require(`../repository/editProfile.repository`)
const { subirFotoCloudinary } = require(`../service/cloudinary.service`)
const Usuarios = require("../repository/model/usuario")
exports.editProfileService = async (nombre, edad, twitter, instagram, descripcion, avatarUrl, arrayUser, id) => {
    try {
        console.log(twitter)
        let userEditado = {
            nombre: nombre,
            edad: edad,
            redes:{instagram: instagram, twitter:twitter},
            descripcion : descripcion,
            avatarUrl: avatarUrl,
            fotos: arrayUser
        }
        if (userEditado.avatarUrl) {
            userEditado.avatarUrl = await subirFotoCloudinary(userEditado.avatarUrl.path, `${userEditado.nombre}/perfil-usuario`)
        }
        if (userEditado.fotos) {
            for (let i = 0; i < userEditado.fotos.length; i++) {
                const foto = userEditado.fotos[i]
                const result = await subirFotoCloudinary(foto.path, `${userEditado.nombre}/fotos-cards`)
                userEditado.fotos[i] = result
            }
        }
        const result = await editProfileUpdate(id, userEditado)
        if(!result){ 
            console.log("volvio vacio en el service: " + result)
        }
        
        return result
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