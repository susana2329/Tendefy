const { editProfileService } = require(`../service/editProfile.service`)
const { getProfileService } = require(`../service/editProfile.service`)

exports.editProfileController = async (req, res) => {
    try { 
                console.log(req.body)
        console.log(req.files)
        const id = req.user.id
        const arrayUser = req.files[`cardsFotos`]
        const fotoUrl = req.files?.[`fotoPerfil`]?.[0]
        const {nombre, edad, twitter, instagram, descripcion} = req.body

        const result = await editProfileService(nombre,edad,twitter,instagram,descripcion,fotoUrl,arrayUser,id)
        
        res.status(200).send(`realizado con exito ${result}`)
    }
    catch (error) {
        res.status(500).send({ code: 500, menssage: `Error en intentar remplazar los datos ` })
    }
}


exports.getProfileController = async (req, res) => {
    try {
        const id = req.user.id
        console.log("quiero queuqe")
        const result = await getProfileService(id)
        if (!result) {
            res.status(400).send(`Error surgio un error a la hora de encontrar al usuario con el id: ${id}`)
        }
        res.status(200).send(JSON.stringify(result))
    } catch (error) {

        res.status(500).send({ code: 500, message: `Error en encontrar al usuario` })

    }
}


