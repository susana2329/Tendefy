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
            type: String,
            required: true
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

        topArtistas: [
            {
                nombre: { type: String, required: true },
                imagenUrl: { type: String, required: true }
            }
        ],
        topCanciones: [
            {
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