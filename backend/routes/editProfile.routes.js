const express = require (`express`)
const editProfileRouter = express.Router()
const multer = require(`multer`)
const path = require(`path`)
const {editProfileController} = require(`../controllers/editProfile.controller`)
const {getProfileController} = require(`../controllers/editProfile.controller`)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'fotosUser')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })


editProfileRouter.patch(`/patch/:id`,upload.fields([{name:`a`, maxCount:1}, {name:`cardsFotos`, maxCount:5}]), editProfileController)

editProfileRouter.get(`/:id`, getProfileController)

module.exports = editProfileRouter