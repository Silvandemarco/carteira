const{ Model, DataTypes} = require('sequelize');

class Transaction extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
            value: DataTypes.DOUBLE,
            date: DataTypes.DATE
        }, {
            sequelize,
            tableName: 'transactions',
        })
    }

    static associate(models) {[
        this.belongsTo(models.Account, { foreignKey: 'account_id', as: 'account'}),
        this.belongsTo(models.Categorie, { foreignKey: 'category_id', as: 'category'})
    ];}
}

module.exports = Transaction;