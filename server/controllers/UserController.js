const User = require('../models/User');
const bcrypt = require('bcrypt'); 
const _ = require('underscore');

const createUser = async (req,res) => {
    try {
        /*let body = req.body;
        //Creamos nuestro usuario
        let usuario = new Usuario({
                nombre: body.nombre,
                email: body.email,
                password: await Usuario.encryptPassword(body.password)
            });
        
        let userFound = await Usuario.find({email: body.email});
        if(userFound.length>0){ //Si encuentra al usuario registrado
            res.status(400).json({
                ok:false,
                message: 'El email ya está registrado'
            });
        }else{//Guardamos en la bd
            if(body.role){
                const foundRole = await Role.find({name: body.role});
                usuario.role = foundRole.map(role =>role._id);
            }else{        
                const role = await Role.findOne({name: "user"});
                usuario.role = [role._id];
            }
            const newUser = await usuario.save();
            res.status(200).json(newUser);
        }

        */
       res.status(200).json('createUser');
    } catch (error) {
        console.error(error);
    }
}

const getUser = async (req,res) => {
    try {
        /*//parametros
        let mail = req.params.email;
        let userFound;
        //Usamos el modelo para buscar, el string esta seteado para devolver solo nombre y email
        if(mail){
            userFound = await Usuario.find({email: mail},'nombre email');
        }else{
            userFound = await Usuario.find({},'nombre email');
        }
        res.status(200).json(userFound); */
        res.status(200).json('getUser');
    } catch (error) {
        console.log(error);
    }
}

const updateUserById = async (req,res) => {
/**Obtenemos la info del ID del usuario, y el body con la info nueva a modificar
let id = req.params.id;
//Usamos Underscore.pick() para tomar el request que llega, y seleccionar solo aquellos campos que se pueden modificar en esta instancia (no passwords, por ejemplo)
//Pasamos el objeto recibido en el 1er argumento, y los campos a modificar como array en el 2do argumento
let body = _.pick(req.body,['nombre','role','estado']);
console.log(body);
//Usamos el modelo para buscar por ID el usuario en la BD de Mongo, debemos pasar new para que devuelva los campos actualizados, runvalidators true para que realice las validaciones, y context query para identificar el contexto de la validacion
const updatedUser = await Usuario.findByIdAndUpdate(id,body,{new: true, runValidators: true, context: 'query'});
res.status(200).json(updatedUser); */
res.status(200).json('updateUser');
}

const deleteUserById = async (req,res) => {
    /*let id = req.params.id;
    
    let cambiarEstado = {
        estado: false
    };

   const deletedUser = await Usuario.findByIdAndUpdate(id,cambiarEstado,{new: true, runValidators: true, context: 'query'});
    res.status(202).json(deletedUser); */
    res.status(200).json('deleteUser');
}

module.exports = {
    createUser,
    getUser,
    updateUserById,
    deleteUserById
}