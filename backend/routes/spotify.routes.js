const express = require('express')
const router = express.Router()

const spotifyController = require('../controllers/spotify.controller')

router.get("/spotify", spotifyController.login)
router.get("/spotify/callback", spotifyController.callback)


module.exports = router