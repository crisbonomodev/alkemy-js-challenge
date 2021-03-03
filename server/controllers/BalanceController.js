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

const replaceBalance = async(req,res) => {
try {
    let now = moment().format('YYYY-MM-DD HH:mm:ss');
    const {newBalance} = req.body;
    console.log(newBalance);
    newBalance.map(async balanceItem  => {
        const {userId,balance,createdAt} = balanceItem;
        console.log(userId,balance,createdAt);
        const balanceFound = await Balance.findOne({where: {userId:`${userId}`}});
        if(balanceFound)
        {
            await Balance.update({
                balance,
                updatedAt: now
            }, {where:{userId:`${userId}`}});

            res.status(200).json({ok: true});
        }
    })

    
} catch (error) {
    res.status(400).json({ok:false,
    message: error});
    
    
}
}

//Funcion para agregar movimientos del balance
const updateBalance = async(req,res) => {
    
    let now = moment().format('YYYY-MM-DD HH:mm:ss');

    const {userId, amount, type} = req.body;
    const balanceFound = await Balance.findOne({where: {userId:`${userId}`}});

    if(balanceFound)
    {
        let newBalanceAmount;
        const {balance : oldBalance} = balanceFound;
        let parsedAmount = Number.parseFloat(amount);
        switch (type) {
            case 'ingreso':
                newBalanceAmount = oldBalance + parsedAmount;
                break;
            case 'egreso':
                newBalanceAmount = oldBalance - parsedAmount;
                break;
        }

        await Balance.update({
            balance: newBalanceAmount,
            updatedAt: now
        }, {where:{userId:`${userId}`}});

        res.status(200).json({ok: true});
    }
    else
    {
        res.status(400).json({ok: false,
            message: 'balance not found'});
    }
}

//Funcion para eliminar movimientos del balance
const restoreBalance = async(req,res) => {
    
    let now = moment().format('YYYY-MM-DD HH:mm:ss');

    const {userId, amount, type} = req.body;
    console.log(userId);
    const balanceFound = await Balance.findOne({where: {userId:`${userId}`}});

    if(balanceFound)
    {
        const {balance : oldBalance} = balanceFound;
        let parsedAmount = Number.parseFloat(amount);

        switch (type) {
            case 'ingreso':
                newBalanceAmount = oldBalance - parsedAmount;
                break;
            case 'egreso':
                newBalanceAmount = oldBalance + parsedAmount;
                break;
        }

        balanceFound.balance = newBalanceAmount;
        console.log(newBalanceAmount);

        await Balance.update({
            balance: newBalanceAmount,
            updatedAt: now
        }, {where:{userId:`${userId}`}});

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
    replaceBalance,
    updateBalance,
    restoreBalance
}