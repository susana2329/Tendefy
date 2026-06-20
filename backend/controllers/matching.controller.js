const matchingService = require('../service/matching.service.js')

const getMatches = async (req,res) =>{
    try {
        const matches = await matchingService.getMatches(req.user.id)
        console.log(req.user)
        res.json(matches)
    } catch (err) {
        console.error(err)
        res.status(500).json(err) 
    }
    
}

module.exports = {getMatches}