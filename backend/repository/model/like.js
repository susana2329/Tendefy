const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
    usuarioQueDioLike: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    usuarioQueRecibioLike: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Like', likeSchema)