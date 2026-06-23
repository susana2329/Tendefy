const likeService = require('../service/likes.service')

const postLike = async (req, res) => {
    try {
        const fromUser = req.user.id
        const {toUser} = req.body


        const isMatch = await likeService.like(fromUser, toUser)

        console.log(req.body)
        res.json({
            match: isMatch
        })


    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}

module.exports = {postLike}