const Match = require('../repository/model/matches.js')
const Like = require('../repository/model/likes.js')
const User = require('../repository/model/usuario.js')
const { sendMatchEmail } = require('./nodeMailer.service')


const like = async (fromUser, toUser) =>{

console.log("LIKES ACTUALeES")
    
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

    if(matchExistente){
        console.log("YA EXITE")
        return true
    }
        
    const likeInverso = await Like.findOne({
        fromUser: toUser,
        toUser: fromUser
    })

    const usuarioMatch = await User.findById(toUser)



    if(likeInverso){
        const usuarioA = await User.findById(fromUser)
        const usuarioB = await User.findById(toUser)
        
        await Match.create({
            userA: fromUser,
            userB: toUser
            })

        await sendMatchEmail(usuarioMatch.email,usuarioMatch.nombre, 90)
        return true
    }

    await Like.create({
        fromUser,
        toUser
    })
    console.log("DESPUES DEL PUSj")


    return false


}



module.exports = { like }