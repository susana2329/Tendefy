const spotifyService = require('../service/spotify.service')
const jwt = require('jsonwebtoken')
const logger = require('../utils/logger')




const login = (req, res) => {
    const url = spotifyService.getAuthorizationUrl()
    res.redirect(url)
    
}


const callback = async (req, res) => {
     
    try {

        const tokenData = await spotifyService.getAccessToken(req.query.code)

        const accessToken = await tokenData.access_token

        const spotifyUser = await spotifyService.getCurrentUser(accessToken)
        const topTracks = await spotifyService.getTopTracks(accessToken)
        const topArtists = await spotifyService.getTopArtists(accessToken)

        const usuario = await spotifyService.getOrCreateUser(spotifyUser, topArtists, topTracks)

        usuario.spotifyAccessToken = tokenData.access_token

        if (tokenData.refresh_token) {
            usuario.spotifyRefreshToken = tokenData.refresh_token
        }

            await usuario.save()

         const token = jwt.sign(
    {
        id:usuario._id,
        spotifyId: usuario.spotifyId
    },
        process.env.JWT_SECRET,
    {
        expiresIn:'7d'
    }
)


    logger.spotify(`Login exitoso: ${usuario.nombre}`)



    res.redirect(
  `http://localhost:4200/app/auth/callback?token=${token}`
)
    } catch (err) {

            console.error(err)
        res.status(500).json(err)
    }
}


const getTopArtists = async (req, res) => {

    try {
        const accessToken = await spotifyService.getSpotifyAccessTokenByUserId(req.user.id)

        const artists = await spotifyService.getTopArtists(accessToken)

        res.json(artists)

    } catch (err) {

        console.error(err)

        res.status(500).json(err)


    }
}


const getTopTracks = async (req, res) => {

    try {   

        const accessToken = await spotifyService.getSpotifyAccessTokenByUserId(req.user.id)


        const tracks = await spotifyService.getTopTracks(accessToken)

        res.json(tracks)

    } catch (err) {

        console.error(err)
        res.status(500).json(err)
    }
}

const getCurrentUser = async (req, res) => {
    try {

        const accessToken = await spotifyService.getSpotifyAccessTokenByUserId(req.user.id)
        const user = await spotifyService.getCurrentUser(accessToken)
        res.json(user)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}


const getCurrentTrack = async (req, res) => {

    try {

        const accessToken = await spotifyService.getSpotifyAccessTokenByUserId(req.user.id)

        const currentTrack = await spotifyService.getCurrentTrack(accessToken)
        res.json(currentTrack)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }

}




module.exports = { login, callback, getTopArtists, getTopTracks, getCurrentUser, getCurrentTrack }