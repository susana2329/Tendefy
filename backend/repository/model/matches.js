const mongoose = require('mongoose');


const matchSchema = mongoose.Schema({
    userA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    userB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Matches', matchSchema);