const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    toUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Likes', likeSchema);