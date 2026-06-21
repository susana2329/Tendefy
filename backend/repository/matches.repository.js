const { create } = require('axios')
const Match = require('./model/matches')

const createMatch = async (userA,userB) =>{
    

    return await Match.create({
        userA,
        userB
    })
}

module.exports = {createMatch}