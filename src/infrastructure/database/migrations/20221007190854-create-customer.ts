import { QueryInterface, DataTypes, QueryTypes } from 'sequelize'
module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable('Customers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        user_id: {
          type: DataTypes.INTEGER,
        },
        fullname: {
          type: DataTypes.STRING,
        },
        address: {
          type: DataTypes.STRING,
        },
        telp: {
          type: DataTypes.STRING,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      })
    }),
  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.dropTable('Customers')
    }),
}
