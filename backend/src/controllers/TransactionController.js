const Transaction = require('../model/Transaction');
const Account = require('../model/Account');
const Categorie = require('../model/Categorie');

module.exports = {
    async index(req, res) {
        const transactions = await Transaction.findAll();

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