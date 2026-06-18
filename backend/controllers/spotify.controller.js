const spotifyService = require('../service/spotify.service')

let accessToken = null

const login = (req,res) =>{
    const url = spotifyService.getAuthorizationUrl()
        console.log(url)

    res.redirect(url)

}


const callback = async (req,res) =>{

  try {
      const code = req.query.code

    const tokenData = await spotifyService.getAccessToken(code)

    accessToken = tokenData.access_token


res.json({
    message: 'login exitoso'
})



  } catch(err){
    res.status(500).json(err.response?.data)
}
}


const getTopArtists = async (req, res) =>{
    
   try {

     const artists = await spotifyService.getTopArtists(accessToken)

    res.json(artists)
    
   } catch (err) {
    
    console.error(err)

    res.status(500).json(err)


   }
}


const getTopTracks = async (req, res) =>{

    try {
        
        const tracks = await spotifyService.getTopTracks(accessToken)

        res.json(tracks)

    } catch (err) {
        
        console.error(err)
        res.status(500).json(err)
    }
}

const getCurrentUser = async (req, res) =>{
    try {
        const user = await spotifyService.getCurrentUser(accessToken)
        res.json(user)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}


const getCurrentTrack = async (req,res) => {

    try {
        const currentTrack = await spotifyService.getCurrentTrack(accessToken)
        res.json(currentTrack)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
    
}




module.exports = { login, callback, getTopArtists, getTopTracks, getCurrentUser, getCurrentTrack}