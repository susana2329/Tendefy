const express = require('express')
const router = express.Router()
const authMiddleware  = require('../middleware/auth.middleware')
const matchingController = require('../controllers/matching.controller.js')

router.get("/matching",authMiddleware,matchingController.getMatches)




module.exports = router