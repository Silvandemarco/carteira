const{ Model, DataTypes} = require('sequelize');

class AccountType extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = AccountType;