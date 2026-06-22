const Like = require('./model/likes')

const createLike = (fromUser, toUser) =>{

        return await Like.create({
            fromUser,
            toUser
        })
}

const findInverseLike = async (fromUser,toUser)=>{
    
    return await Like.findOne({
        fromUser: toUser,
        toUser: fromUser
    })

}

module.exports = {createLike, findInverseLike}