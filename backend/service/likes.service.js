const likes = require('../mocks/likes.json')
const matches = require('../mocks/matches.json')
const {sendMatchEmail} = require('./nodeMailer.service')


const like = async (fromUser, toUser) =>{
console.log("LIKES ACTUALES")
console.log(likes)
    for (let i = 0; i < likes.length; i++) {
        
        if(likes[i].fromUser === toUser && likes[i].toUser === fromUser){

            matches.push({
                userA:fromUser,
                userB:toUser
            })

            
            await sendMatchEmail(
    "tojoaca10@gmail.com",
    "Tobias",
    82
)
            return true

            
        }
    }

    likes.push({
        fromUser,
        toUser
    })

    console.log("DESPUES DEL PUSJ")
    console.log(likes)
    return false
}

module.exports = { like }