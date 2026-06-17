const { editProfileService } = require(`../service/editProfile.service`)




exports.editProfileController = async (req, res) => {
    try {
        const id = req.params.id
        const usuario = req.body
        const result = await editProfileService(id, usuario)
        if (!result) {
            res.status(400).send(`Error en confirmar la identificacion del usuario con el id: ${id}`)
        }
        res.status(200).send(`realizado con exito`, JSON.stringify(result))
    }
    catch (error) {
        res.status(500).send({ code: 500, menssage: `Error en intentar remplazar los datos ` })
    }
}