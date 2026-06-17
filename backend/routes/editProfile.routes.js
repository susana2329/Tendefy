const express = require (`express`)
const editProfileRouter = express.Router()
const {editProfileController} = require(`../controllers/editProfile.controller`)

editProfileRouter.get(`/:id`, editProfileController)


module.exports = editProfileRouter