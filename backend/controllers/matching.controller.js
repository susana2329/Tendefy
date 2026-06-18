const matchingService = require('../service/matching.service.js')
const users = require('../mocks/profiles.json')
const userActual = require('../mocks/me.json')

const getMatches = (req,res) =>{
    try {
        const matches = matchingService.getMatches(userActual,users)

        res.json(matches)
    } catch (err) {
        console.error(err)
        res.status(500).json(err) 
    }
    
}

module.exports = {getMatches}