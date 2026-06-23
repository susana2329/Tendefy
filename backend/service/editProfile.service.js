const { editProfileUpdate } = require(`../repository/editProfile.repository`)
const { getProfile } = require(`../repository/editProfile.repository`)
const { subirFotoCloudinary } = require(`../service/cloudinary.service`)
const Usuarios = require("../repository/model/usuario")
exports.editProfileService = async (nombre, edad, twitter, instagram, descripcion, avatarUrl, arrayUser, id) => {
    try {
        let userEditado = {
            nombre: nombre,
            edad: edad,
            descripcion: descripcion,
            instagram: instagram,
            twitter: twitter,
            avatarUrl: avatarUrl,
            fotos: arrayUser
        }
        if (avatarUrl) {
            userEditado.avatarUrl = await subirFotoCloudinary(avatarUrl.path, `${id}/perfil-usuario`)
        }
        if (arrayUser) {
            for (let i = 0; i < arrayUser.length; i++) {
                console.log(arrayUser)
                const result = await subirFotoCloudinary(arrayUser[i].path, `${id}/fotos-cards`)
                console.log(result)
                userEditado.fotos[i] = result
            }
        }
        const result = await editProfileUpdate(id, userEditado)
        if (!result) {
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