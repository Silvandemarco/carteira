'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'categories', 
      'parent_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'categories', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'categories', 
      'parent_id',
    );
  }
};
