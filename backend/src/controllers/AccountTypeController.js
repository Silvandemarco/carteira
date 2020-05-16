const AccountType = require('../model/AccountType');

module.exports = {
    async store(req, res) {
        const { description } = req.body;

        const accountType = await AccountType.create({ description });

        return res.json(accountType);
    }
};