const mongoose = require('mongoose');

const usuariosSchema = mongoose.Schema(
    {
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
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        compatibilidad: {
            type: Number,
            required: true
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
        },
        fotos: [
            {
                url: { type: String, required: true },
                publicId: { type: String, required: true  }
            }
        ]
    }
)

const Usuarios = mongoose.model('Usuarios', usuariosSchema)

module.exports = Usuarios