const mongoose = require('mongoose');

const usuariosSchema = mongoose.Schema(
    {
        spotifyId: {
            type: String,
            required: true,
            unique: true
        },
        spotifyAccessToken: {
            type: String
        },
        spotifyRefreshToken: {
            type: String
        },
        nombre: {
            type: String,
        },
        edad: {
            type: Number,
        },
        ubicacion: {
            type: String,
        },
        email: {
            type: String
        },
        avatarUrl: {
            type: String,
        },
        fotos: [
            {
                url: { type: String, required: true },
                publicId: { type: String, required: true }
            }
        ],
        descripcion: {
            type: String,
        },
        topArtists: [
            {
                _id: false,
                nombre: { type: String, required: true },
                imagenUrl: { type: String, required: true },
                _id: false

            }
        ],
        topTracks: [
            {
                _id: false,
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


        }
    }
)


const Usuarios = mongoose.model('Usuarios', usuariosSchema)

module.exports = Usuarios

