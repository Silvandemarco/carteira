const{ Model, DataTypes} = require('sequelize');

class AccountType extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Account, { foreignKey: 'account_types_id', as: 'accounts'});
    }
}

module.exports = AccountType;