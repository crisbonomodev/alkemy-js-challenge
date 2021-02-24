const Transaction = require('../models/Transaction');
const User = require('../models/User');
const moment = require('moment');
const { ISO_8601 } = require('moment');
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
            userFound = null;
            
        }

        if(userFound)
        {
            const {id} = userFound.dataValues; 

            let transactions = await Transaction.findAll({
                where: {
                    userId: `${id}`}
                });
    
            res.status(200).json(transactions); 
        }
        else
        {
            res.status(400).json({ok: false,
            error: 'user not found'}); 
        }

    } catch (error) {
        console.log(error);
    }
}

const createTransaction = async (req,res) => {
    

    let now = moment().format('YYYY-MM-DD HH:mm:ss');
    let {type,category,concept,amount,userId} = req.body;
    let createdAt = now;
    let updatedAt = now;
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
        newTransaction
    })
}

const updateTransaction = async(req,res) => {
    
    let now = moment().format('YYYY-MM-DD HH:mm:ss');

    const {transactionId,category,concept,amount} = req.body;

    const transactionFound = await Transaction.findOne({where: {id:`${transactionId}`}});

    if(transactionFound)
    {
        await Transaction.update({
            category:`${category}`,
            amount: `${amount}`,
            concept: `${concept}`,
            updatedAt: now
        }, {where:{id:`${transactionId}`}});

        res.status(200).json({ok: true});
    }
    else
    {
        res.status(400).json({ok: false,
            message: 'transaction not found'});
    }
}

const deleteTransaction = async(req,res) => {

    const {transactionId} = req.body;

    const transactionFound = await Transaction.findOne({where: {id:`${transactionId}`}});

    if(transactionFound)
    {
        await Transaction.destroy({where: {id:`${transactionId}`}});
        res.status(200).json({ok:true});
    }
    else
    {
        res.status(400).json({ok:false,
        message: 'transaction not found'});
    }

}

module.exports = {
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
}