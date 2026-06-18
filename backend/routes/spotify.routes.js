const express = require('express')
const router = express.Router()
console.log("SPOTIFY ROUTES CARGADO");
const spotifyController = require('../controllers/spotify.controller')

router.get("/spotify", spotifyController.login)
router.get("/spotify/callback", spotifyController.callback)
router.get("/spotify/artists", spotifyController.getTopArtists)
router.get("/spotify/tracks", spotifyController.getTopTracks)
router.get("/spotify/profile",spotifyController.getCurrentUser)
router.get("/spotify/currentTrack",spotifyController.getCurrentTrack)

router.get("/test", (req, res) => {
    console.log("ENTRO A TEST");
    res.send("ok");
});

console.log(
    router.stack
        .filter(r => r.route)
        .map(r => r.route.path)
)
module.exports = router