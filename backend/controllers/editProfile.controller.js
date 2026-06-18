const { editProfileService } = require(`../service/editProfile.service`)
const {getProfileService} = require(`../service/editProfile.service`)



exports.editProfileController = async (req, res) => {
    try {
        const id = req.params.id
        const usuario = req.body
        console.log (usuario)
        const result = await editProfileService(id, usuario)
        if(!result){
            res.send("paso algo")
        }
        res.status(200).send(`realizado con exito ${result}`)
    }
    catch (error) {
        res.status(500).send({ code: 500, menssage: `Error en intentar remplazar los datos ` })
    }
}


exports.getProfileController = async (req,res) => { 
    try {
        const id = req.params.id
        console.log("quiero queuqe")
        const result = await getProfileService(id)
        if(!result){
            res.status(400).send(`Error surgio un error a la hora de encontrar al usuario con el id: ${id}`)
        }
        res.status(200).send(JSON.stringify(result))
    } catch (error) {

        res.status(500).send({code:500, message: `Error en encontrar al usuario`})
        
    }
}


