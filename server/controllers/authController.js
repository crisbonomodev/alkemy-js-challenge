const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signIn = async (req,res) => {
    let body = req.body;
    let email = req.body.email.toLowerCase();
    //Buscamos el usuario en bd
    const userFound = await User.findOne({where: {email: `${email}`}});
    
    if(!userFound){
        return res.status(400).json({
            ok: false,
            mensaje: {
                message: 'Usuario o contraseña incorrectos'
            }
        });
    }
    if(!User.comparePassword(userFound.password, body.password)){
        return res.status(400).json({
            ok: false,
            mensaje: {
                message: 'usuario o Contraseña incorrectos'
            }
        });
    }

        let token = jwt.sign({user: userFound},process.env.SEED,{expiresIn: process.env.CADUCIDAD_TOKEN});
        res.json({ //Login exitoso
            ok: true,
            user: userFound,
            token
        });
    };

module.exports = {
    signIn
}