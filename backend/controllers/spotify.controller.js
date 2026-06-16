const spotifyService = require('../service/spotify.service')

const login = (req,res) =>{
    const url = spotifyService.getAuthorizationUrl()
        console.log(url)

    res.redirect(url)

}


const callback = async (req,res) =>{

  try {
      const code = req.query.code

    const tokenData = await spotifyService.getAccessToken(code)

   const profile =
    await spotifyService.getProfile(
        tokenData.access_token
    )

res.json(profile)

  } catch (err) {

    console.error(err)
    res.status(500).json(err)
    
  }
}




module.exports = { login, callback}