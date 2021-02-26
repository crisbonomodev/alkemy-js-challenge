const jwt = require('jsonwebtoken');

const generateJWT = (uid,name) => {

    return new Promise((resolve,reject)=> {
        const payload = {uid,name};
        jwt.sign(payload,process.env.SEED,{expiresIn: process.env.CADUCIDAD_TOKEN}
            ,(err,token)=> {
                if(err)
                {
                   reject('No se pudo generar el token'); 
                }
                resolve(token);
            }
    )
})}

module.exports = {
    generateJWT
}