const axios = require('axios')
const getAuthorizationUrl = () =>{
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const scopes = [
        "user-read-email",
        "user-read-private",
        "user-top-read"
    ].join(" ")

    return(
         "https://accounts.spotify.com/authorize" +
        `?response_type=code` +
        `&client_id=${clientId}` +
        `&scope=${encodeURIComponent(scopes)}` +
        `&redirect_uri=${encodeURIComponent(
            process.env.SPOTIFY_REDIRECT_URI)}`
    )  
}

const getAccessToken = async (code) => {
    const response = await axios.post(
         "https://accounts.spotify.com/api/token",
         new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: process.env.SPOTIFY_REDIRECT_URI
        }),{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },

            auth: {
                username: process.env.SPOTIFY_CLIENT_ID,
                password: process.env.SPOTIFY_CLIENT_SECRET
            }
        }
    )

    return response.data

}


const getProfile = async (accessToken) =>{
    const response = await axios.get(
        "https://api.spotify.com/v1/me",{
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
        }
    )
    return response.data
}


module.exports = { getAuthorizationUrl,getAccessToken,getProfile}