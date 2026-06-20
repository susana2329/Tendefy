const Usuarios = require('./model/usuario')


const findBySpotifyId = async (spotifyId) => {

    const usuario = await Usuarios.findOne({
        spotifyId: spotifyId
    })

    return usuario
}


const createUser = async (spotifyUser,topArtists,topTracks) => {
       console.log("ARTISTAS:", topArtists.length)
    console.log("TRACKS:", topTracks.length)

    const usuario = await Usuarios.create({
        spotifyId: spotifyUser.id,
        nombre: spotifyUser.display_name,
        email: spotifyUser.email,
        topArtists: topArtists,
        topTracks: topTracks,
        
    })

    return usuario
}   

const updateSpotifyData = async (topArtists,topTracks,spotifyUser) =>{

    
    return await Usuarios.findOneAndUpdate(
        {
            spotifyId: spotifyUser.id

        },
        {
            email: spotifyUser.email,
            topArtists:topArtists,
            topTracks: topTracks
        },
        {
            new: true
        })
}

const findById = async (id) => {

    return await Usuarios.findById(id)

}


module.exports = {findBySpotifyId,createUser, updateSpotifyData, findById}

