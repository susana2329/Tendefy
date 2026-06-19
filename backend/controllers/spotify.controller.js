const spotifyService = require('../service/spotify.service')

let accessToken = null

const login = (req, res) => {
    const url = spotifyService.getAuthorizationUrl()
    console.log(url)

    res.redirect(url)

}


const callback = async (req, res) => {
      console.log('HOLA mi NOMBRE ES CALLBACK')
    try {
        console.log('soy un try')
        const code = req.query.code

        const tokenData = await spotifyService.getAccessToken(code)

        accessToken = tokenData.access_token

        const spotifyUser = await spotifyService.getCurrentUser(accessToken)
        const topTracks = await spotifyService.getTopTracks(accessToken)
        const topArtists = await spotifyService.getTopArtists(accessToken)

        const usuario = await spotifyService.getOrCreateUser(spotifyUser, topArtists, topTracks)


        console.log('spotify ok')

        console.log(topArtists.length)

        console.log(topTracks.length)

        console.log(usuario)
        res.json({ usuario })

    } catch (err) {

            console.log('ENTRO AL CATCH')
            console.error(err)
        res.status(500).json(err)
    }
}


const getTopArtists = async (req, res) => {

    try {

        const artists = await spotifyService.getTopArtists(accessToken)

        res.json(artists)

    } catch (err) {

        console.error(err)

        res.status(500).json(err)


    }
}


const getTopTracks = async (req, res) => {

    try {

        const tracks = await spotifyService.getTopTracks(accessToken)

        res.json(tracks)

    } catch (err) {

        console.error(err)
        res.status(500).json(err)
    }
}

const getCurrentUser = async (req, res) => {
    try {
        const user = await spotifyService.getCurrentUser(accessToken)
        res.json(user)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}


const getCurrentTrack = async (req, res) => {

    try {
        const currentTrack = await spotifyService.getCurrentTrack(accessToken)
        res.json(currentTrack)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }

}




module.exports = { login, callback, getTopArtists, getTopTracks, getCurrentUser, getCurrentTrack }