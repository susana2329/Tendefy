const express = require (`express`)
const editProfileRouter = express.Router()
const {editProfileController} = require(`../controllers/editProfile.controller`)
const {getProfileController} = require(`../controllers/editProfile.controller`)






editProfileRouter.patch(`/:id`, editProfileController)

editProfileRouter.get(`/:id`, getProfileController)

module.exports = editProfileRouter