const axios = require('axios')
const getAuthorizationUrl = () =>{
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const scopes = [
    "user-read-email",
    "user-read-private",
    "user-top-read",
    "user-read-currently-playing"].join(" ")

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




const getTopArtists = async (accessToken) =>{
    const artistas = []
    const response = await axios.get(
        "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term",
        {headers:{
            Authorization: `Bearer ${accessToken}`
        }}
    )

     for (let i = 0; i < response.data.items.length; i++) {
        artistas.push(
            response.data.items[i].name
        )

        
    }
    return artistas
}



const getTopTracks = async (accessToken) =>{

    const tracks = []
    const response = await axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=medium_term",
    {headers:{
        Authorization: `Bearer ${accessToken}`
    }})


    for (let i = 0; i < response.data.items.length; i++) {
        tracks.push(
            response.data.items[i].name
        )

    
    }
    return tracks

}

const getCurrentUser = async (accessToken) =>{

    const response = await axios.get(
        "https://api.spotify.com/v1/me",
        {
            headers : {
                Authorization: `Bearer ${accessToken}`
            }
        }
    )
    return{
        id: response.data.id,
        display_name: response.data.display_name,
        email: response.data.email,
        country: response.data.country,
        url:respose.data.external_urls
    }
}

const getCurrentTrack = async (accessToken) =>{
    const response = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
          {
            headers : {
                Authorization: `Bearer ${accessToken}`
            }
        }
    )
        return {
        track: response.data.item.name,
        artist: response.data.item.artists[0].name,
        album: response.data.item.album.name,
        image: response.data.item.album.images[0].url
    }
}

module.exports = { getAuthorizationUrl,getAccessToken,getTopArtists, getCurrentUser, getTopTracks, getCurrentTrack}