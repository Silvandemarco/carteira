const{ Model, DataTypes} = require('sequelize');

class Categorie extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {[
        this.belongsTo(models.Categorie, { foreignKey: 'parent_id', as: 'parent'}),
        this.hasMany(models.Transaction, { foreignKey: 'category_id', as: 'transaction'})
    ];}
}

module.exports = Categorie;