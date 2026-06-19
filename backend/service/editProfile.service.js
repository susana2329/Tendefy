const { editProfileUpdate } = require(`../repository/editProfile.repository`)
const { getProfile } = require(`../repository/editProfile.repository`)

exports.editProfileService = async (id, usuario) => {
    try {
        return result = await editProfileUpdate(id, usuario)
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