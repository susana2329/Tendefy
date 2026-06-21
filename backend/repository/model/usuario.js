const mongoose = require('mongoose');

const usuariosSchema = mongoose.Schema(
    {
        spotifyId: {
            type: String,
            required: true,
            unique: true
        },
        nombre: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
        },
        ubicacion: {
            type: String,
        },
        avatarUrl: {

        },
        fotos: [
            {
                url: { type: String },
                publicId: { type: String}
            }
        ],
        descripcion: {
            type: String,
        },
        topArtists: [
            {
                nombre: { type: String, required: true },
                imagenUrl: { type: String, required: true },
                _id: false

            }
        ],
        topTracks: [
            {
                titulo: { type: String, required: true },
                artista: { type: String, required: true },
                coverUrl: { type: String, required: true },
                _id: false
            }
        ],
        redes: {
            instagram: { type: String },
            spotify: { type: String },
            twitter: { type: String }
        },
        fotos: [

        ]
    }
)




module.exports = mongoose.model('Usuarios', usuariosSchema)
