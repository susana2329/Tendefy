const jwt = require('jsonwebtoken')
const authMiddleware = (req,res,next) =>{
    

    const authHeader = req.headers.authorization
    console.log (authHeader)

    if(!authHeader){
        return res.status(401).json({
            error:"falta tokenn"
        })
    }

    const token = authHeader.split(' ')[1]

    try {
        

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.user = payload


        
        next()
    } catch (err) {
            console.log(err);
        return res.status(401).json({
            error:"token invaalido"
        })
    }


}

module.exports = authMiddleware