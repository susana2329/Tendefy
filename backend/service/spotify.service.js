const axios = require('axios')
const usuarioRepository = require('../repository/postUser.repository')
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
        artistas.push({
    nombre: response.data.items[i].name,
    imagenUrl: response.data.items[i].images[0]?.url
})

        
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
        tracks.push({
    titulo: response.data.items[i].name,
    artista: response.data.items[i].artists[0].name,
    coverUrl: response.data.items[i].album.images[0]?.url
})    
    }
    
    return tracks

}

const getCurrentUser = async (accessToken) =>{

    const response = await axios.get("https://api.spotify.com/v1/me",
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
        url:response.data.external_urls
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
        
    }
}

const getTopArtistsByUserId = async (userId) => {

    const usuario = await usuarioRepository.findById(userId)

    return await getTopArtists(usuario.spotifyAccessToken)
}


const getOrCreateUser = async (spotifyUser,topArtists,topTracks) => {
    

    let usuario = await usuarioRepository.findBySpotifyId(spotifyUser.id)
    
    if (!usuario) {

        usuario = await usuarioRepository.createUser(spotifyUser,topArtists,topTracks)

    }   
    else
        {
            usuario = await usuarioRepository.updateSpotifyData(topArtists, topTracks,spotifyUser)
    }

return usuario;
    return usuario
}



const getSpotifyAccessTokenByUserId = async (userId) => {

    const usuario = await usuarioRepository.findById(userId)

    return usuario.spotifyAccessToken
}

module.exports = { getAuthorizationUrl,getAccessToken,getSpotifyAccessTokenByUserId,getTopArtists,getTopArtistsByUserId, getCurrentUser, getTopTracks, getCurrentTrack, getOrCreateUser}