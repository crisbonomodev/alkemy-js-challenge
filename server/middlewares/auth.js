const jwt = require('jsonwebtoken');

let verifyToken = (req,res,next)=> {

    let token = req.headers['x-access-token'];//Leemos el token personalizado del header
    jwt.verify(token,process.env.SEED,(err,decoded)=>{
        if(err)
        {
            return res.status(401).json({
               ok: false,
               err: 'Invalid Token'
            })
        }
        req.user = decoded.user;
        next();
    })
}

module.exports = {verifyToken};