const jwt = require('jsonwebtoken');

let verifyToken = (req,res,next)=> {

    let token = req.headers['x-access-token'];//Leemos el token personalizado del header
    
    if(!token)
        {
            return res.status(401).json({
                ok: false,
                err: 'Invalid Token'
             })
        }
    
    try {
        const {uid,name} = jwt.verify(token,process.env.SEED);

        req.uid = uid;
        req.name = name;

        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            err: 'Invalid Token'
         })
    }

    next();
}

module.exports = {verifyToken};