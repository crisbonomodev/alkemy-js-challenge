const Transaction = require('../models/Transaction');
const User = require('../models/User');
const moment = require('moment');
const { ISO_8601 } = require('moment');
//Metodo para buscar transacciones, recibe por parametro el username.

//

const getTransaction = async (req,res) => {
    try {

            const id = req.params.id; 

            let transactions = await Transaction.findAll();
    
            res.status(200).json(transactions); 

    } catch (error) {
        console.log(error);
    }
}

const createTransaction = async (req,res) => {
    
try {
    let now = moment().format('YYYY-MM-DD HH:mm:ss');
    let {type,category,concept,amount,userId,date} = req.body;
    let createdAt = now;
    let updatedAt = now;
    const newTransaction = await Transaction.create({
        type,
        category,
        concept,
        amount,
        date,
        userId,
        createdAt,
        updatedAt
    })

    res.status(200).json({
        ok: true,
        newTransaction
    })
} catch (error) {
    res.status(400).json({
        ok: false,
        error
    })
}
    
}

const updateTransaction = async(req,res) => {
    
    let now = moment().format('YYYY-MM-DD HH:mm:ss');

    const {id,category,concept,amount} = req.body;
    const transactionFound = await Transaction.findOne({where: {id:`${id}`}});

    if(transactionFound)
    {
        await Transaction.update({
            category:`${category}`,
            amount: `${amount}`,
            concept: `${concept}`,
            updatedAt: now
        }, {where:{id:`${id}`}});

        res.status(200).json({ok: true});
    }
    else
    {
        res.status(400).json({ok: false,
            message: 'transaction not found'});
    }
}

const deleteTransaction = async(req,res) => {

    console.log(req.body.id);
    const id = req.body.id;
    const transactionFound = await Transaction.findOne({where: {id:`${id}`}});

    if(transactionFound)
    {
        await Transaction.destroy({where: {id:`${id}`}});
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