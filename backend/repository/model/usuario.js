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
        topArtistas: [
            {
                _id: false,
                nombre: { type: String, required: true },
                imagenUrl: { type: String, required: true }
            }
        ],
        topCanciones: [
            {
                _id: false,
                titulo: { type: String, required: true },
                artista: { type: String, required: true },
                coverUrl: { type: String, required: true }
            }
        ],
        redes: {
            instagram: { type: String },
            spotify: { type: String },
            twitter: { type: String }
        }
    }
)

module.exports = mongoose.model('Usuarios', usuariosSchema)