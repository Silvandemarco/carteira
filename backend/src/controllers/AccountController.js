const Account_type = require('../model/AccountType');
const Account = require('../model/Account');

module.exports = {
    async index(req, res) {
        const accounts = await Account.findAll();

        return res.json(accounts);
    },
    async ListTypes(req, res) {
        const { account_type_id } = req.params;

        const account_type = await Account_type.findByPk(account_type_id, {
            include: { association: 'accounts' }
        });

        return res.json(account_type.accounts);
    },
    async store(req, res) {
        const { description, account_types_id, opening_balance } = req.body;

        const account_type = await Account_type.findByPk(account_types_id);

        if (!account_type) {
            return res.status(400).json({ error: 'Account type not found'});
        }

        const account = await Account.create({ description, account_types_id, opening_balance });

        return res.json(account);
    }
};