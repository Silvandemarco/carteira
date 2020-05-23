const AccountType = require('../model/AccountType');

module.exports = {
    async index(req, res) {
        const accountTypes = await AccountType.findAll();

        return res.json(accountTypes);
    },
    async store(req, res) {
        const { description } = req.body;

        const accountType = await AccountType.create({ description });

        return res.json(accountType);
    }
};