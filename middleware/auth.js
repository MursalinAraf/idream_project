const jwt = require('jsonwebtoken')
const authMiddleware = (req,res,next) => {
    try {  
     const token = req.headers.authorization.split(" ")[1] 
     const isCustomAuth = token.length < 500
     let decodedData;
     
     if (token && isCustomAuth) {
         decodedData = jwt.verify(token, 'test')
         req.userId = decodedData.id
     }
     next()
    } 
    catch (error) {
        console.log(error)
    }
}

module.exports = authMiddleware