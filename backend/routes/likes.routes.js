const express = require('express')
const router = express.Router()
const likeController = require('../controllers/like.controller')

router.post('/like', likeController.postLike)


module.exports = router