const jwt = require('jsonwebtoken')


module.exports = {
     generateToken = (data)=>{
         return jwt.sign({id:data.ID,email:data.email}, process.env.JWT_SECRET, {algorithm:'ES256', expiresIn:"6h"} )
     }
       ,
     decode = (token) =>{
         return jwt.decode(token)
     }
}