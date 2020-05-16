const{ Model, DataTypes} = require('sequelize');

class Account extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
            account_types_id: DataTypes.INTEGER,
            opening_balance: DataTypes.DOUBLE,
        }, {
            sequelize
        })
    }
}

module.exports = Account;