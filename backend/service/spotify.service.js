
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

module.exports = { getAuthorizationUrl}