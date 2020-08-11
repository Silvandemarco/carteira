const Transaction = require('../model/Transaction');
const Account = require('../model/Account');
const Categorie = require('../model/Categorie');
const { Op } = require("sequelize");

module.exports = {
    async index(req, res) {
        
        const { accounts, category = 0, from_date = new Date(), to_date = new Date() } = req.query;

        const where = {};
        where.date = {
            [Op.between]: [from_date, to_date] 
        }
        if (accounts !== undefined) {
            where.account_id = accounts;
        }
        if (category !== 0){
            where.category_id = category;
        }

        const transactions = await Transaction.findAll({ 
            include: [
                { association: 'category'},
                { association: 'account'}
            ],
            order: [
                ['date', 'DESC']
            ],
                where: where
        });

        return res.json(transactions);    
    },
    async store(req, res) {
        const { description, value, date, account_id, category_id } = req.body;

        const account = await Account.findByPk(account_id);
        const category = await Categorie.findByPk(category_id);

        if (!account) {
            return res.status(400).json({ error: 'Account not found'});
        }
        if (!category) {
            return res.status(400).json({ error: 'Category not found'});
        }

        const transactions = await Transaction.create({ description, value, date, account_id, category_id });

        return res.json(transactions);
    }
};