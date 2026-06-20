const express = require('express')
const router = express.Router()
console.log("SPOTIFY ROUTES CARGADO");
const authMiddleware = require('../middleware/auth.middleware')
const spotifyController = require('../controllers/spotify.controller')

router.get("/spotify", spotifyController.login)
router.get("/spotify/callback", spotifyController.callback)
router.get("/spotify/artists", authMiddleware,spotifyController.getTopArtists)
router.get("/spotify/tracks", authMiddleware,spotifyController.getTopTracks)
router.get("/spotify/profile",authMiddleware,spotifyController.getCurrentUser)
router.get("/spotify/currentTrack",authMiddleware,spotifyController.getCurrentTrack)



router.get("/test", (req, res) => {
    console.log("ENTRO A TEST");
    res.send("ok");
});


module.exports = router