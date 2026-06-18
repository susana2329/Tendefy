const express = require('express')
const router = express.Router()
const matchingController = require('../controllers/matching.controller.js')

router.get("/matching",matchingController.getMatches)




module.exports = router