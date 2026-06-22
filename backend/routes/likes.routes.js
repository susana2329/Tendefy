const express = require('express')
const router = express.Router()
const likeController = require('../controllers/like.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.post('/like',authMiddleware, likeController.postLike)


module.exports = router