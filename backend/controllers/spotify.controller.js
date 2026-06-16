const spotifyService = require('../service/spotify.service')

const login = (req,res) =>{
    const url = spotifyService.getAuthorizationUrl()
        console.log(url)

    res.redirect(url)

}


const callback = (req,res) =>{

    const code = req.query

    console.log("code",code)
    res.send("spotify esta de puta madre")
}




module.exports = { login, callback}