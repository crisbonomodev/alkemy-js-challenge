const Transaction = require('../models/Transaction');
const User = require('../models/User');
//Metodo para buscar transacciones, recibe por parametro el username.

//

const getTransaction = async (req,res) => {
    try {
        //parametros
        let username = req.body.username;
        console.log(username);
        let userFound;
         if(username){
            userFound = await User.findOne({where: {username: `${username}`}});
        }else{
            userFound = {};
        }
        const {id} = userFound.dataValues; 

        let transactions = await Transaction.findAll({
            where: {
                userId: `${id}`}
            });

        res.status(200).json(transactions); 
    } catch (error) {
        console.log(error);
    }
}

const createTransaction = async (req,res) => {

    let now = new Date();
    console.log(now);
    let {type,category,concept,amount,userId} = req.body;
    let createdAt = now;
    let updatedAt = now;

    console.log(createdAt);
    const newTransaction = await Transaction.create({
        type,
        category,
        concept,
        amount,
        userId,
        createdAt,
        updatedAt
    })

    res.status(200).json({
        //newTransaction
    })
}


module.exports = {
    getTransaction,
    createTransaction
}