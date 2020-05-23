const{ Model, DataTypes} = require('sequelize');

class Account extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
            //account_types_id: DataTypes.INTEGER,
            opening_balance: DataTypes.DOUBLE,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.AccountType, { foreignKey: 'account_types_id', as: 'account_type'});
    }
}

module.exports = Account;