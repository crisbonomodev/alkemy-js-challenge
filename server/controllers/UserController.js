const User = require('../models/User');

//Metodo de creacion de usuarios, valida que el username no exista, en ese caso retorna error.
//Caso contrario, graba el usuario en bd.
const createUser = async (req,res) => {
    try {
        let {email,password,firstName,lastName} = req.body;
        let userFound = await User.findOne({where: {email: `${email}`}});
        if(userFound!== null){ //Si encuentra al usuario registrado
            res.status(400).json({
                ok:false,
                message: 'username already registered.'
            });
        }else{//Guardamos en la bd
            const newUser = await User.create({
                email: email,
                password: await User.encryptPassword(password),
                firstName: firstName,
                lastName: lastName
            });

            res.status(200).json(newUser);
        }
    } catch (error) {
        res.status(400).json({ok: false,
        error: error.message});
    }
}

//Metodo para buscar usuarios, recibe por parametro el username.
const getUser = async (req,res) => {
    try {
        //parametros
        let email = req.body.email;
        console.log(email);
        let userFound;
        //Usamos el modelo para buscar, el string esta seteado para devolver solo nombre y email
        if(email){
            userFound = await User.findOne({where: {email: `${email}`}});
        }else{
            userFound = {};
        }
        res.status(200).json(userFound); 
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