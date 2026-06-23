const Match = require('../repository/model/matches.js')
const Like = require('../repository/model/likes.js')
const User = require('../repository/model/usuario.js')
const { sendMatchEmail } = require('./nodeMailer.service')
const { calcularCompatibilidad } = require('./matching.service');


const like = async (fromUser, toUser) => {

    const matchExistente = await Match.findOne({
        $or: [
            {
                userA: fromUser,
                userB: toUser
            },
            {
                userA: toUser,
                userB: fromUser
            }
        ]
    })
    if (matchExistente) {
        console.log("YA EXITE")
        return true
    }





    const likeInverso = await Like.findOne({
        fromUser: toUser,
        toUser: fromUser
    });




    if (likeInverso) {

        const usuarioA = await User.findById(fromUser);
        const usuarioB = await User.findById(toUser);

        const artistasA = usuarioA.topArtists.map(a => a.nombre);
        const artistasB = usuarioB.topArtists.map(a => a.nombre);

        const compatibilidad = Math.round(calcularCompatibilidad(artistasA, artistasB));


        await Match.create({
            userA: fromUser,
            userB: toUser
        });

        if (usuarioA?.email) {
            await sendMatchEmail(
                usuarioA.email,
                usuarioA.nombre,
                compatibilidad
            );
        }

        if (usuarioB?.email) {
            await sendMatchEmail(
                usuarioB.email,
                usuarioB.nombre,
                compatibilidad
            );
        }

        return true;
    }
    await Like.create({
        fromUser,
        toUser
    })
    console.log("DESPUES DEL PUSj")


    return false


}



module.exports = { like }