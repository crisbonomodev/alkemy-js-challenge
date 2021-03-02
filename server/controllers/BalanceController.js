const Balance = require('../models/Balance');
const moment = require('moment');

const getBalance = async (req,res) => {
    try {

            let balances = await Balance.findAll();
            res.status(200).json(balances); 

    } catch (error) {
        res.status(400).json({ok: false,
        message: 'balance not found'}); 
    }
}

const createBalance = async (userId) => {
    
try {
    let now = moment().format('YYYY-MM-DD HH:mm:ss');
    let createdAt = now;
    let updatedAt = now;
    const newBalance = await Balance.create({
        userId,
        balance: 0,
        createdAt,
        updatedAt
    })

    return newBalance;

} catch (error) {
    return error;
}
    
}

const updateBalance = async(req,res) => {
    
    let now = moment().format('YYYY-MM-DD HH:mm:ss');

    const {id,balance} = req.body;

    const balanceFound = await Balance.findOne({where: {id:`${id}`}});

    if(balanceFound)
    {
        await Balance.update({
            balance: `${balance}`,
            updatedAt: now
        }, {where:{id:`${id}`}});

        res.status(200).json({ok: true});
    }
    else
    {
        res.status(400).json({ok: false,
            message: 'balance not found'});
    }
}

module.exports = {
    getBalance,
    createBalance,
    updateBalance
}