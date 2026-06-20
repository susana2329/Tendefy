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
            required: true
        },
        ubicacion: {
            type: String,
            required: true
        },
        avatarUrl: {

        },
        descripcion: {
            type: String,
            required: true
        },
        compatibilidad: {
            type: Number,
            required: true
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


const Usuarios = mongoose.model('Usuarios', usuariosSchema)

module.exports = Usuarios