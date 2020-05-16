const Account = require('../model/Account');

module.exports = {
    async store(req, res) {
        const { description, account_types_id, opening_balance } = req.body;

        const account = await Account.create({ description, account_types_id, opening_balance });

        return res.json(account);
    }
};