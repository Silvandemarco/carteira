const Categorie = require('../model/Categorie');

module.exports = {
    async index(req, res) {
        const categories = await Categorie.findAll( { include: { association: 'parent' } } );

        return res.json(categories);
    },
    async store(req, res) {
        const { description, parent_id } = req.body;

        const parent = await Categorie.findByPk(parent_id);

        if (!parent) {
            return res.status(400).json({ error: 'Parent not found'});
        }

        const categorie = await Categorie.create({ description, parent_id });

        return res.json(categorie);
    }
};