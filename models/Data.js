const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// by extending the modal we are able to call the sum function to sum up the cost of each category
// this allows us to create a chart.js 
class Data extends Model { static async sumByCategory(category) {
    const results = await this.findAll({
      where: { category },
      attributes: [[sequelize.fn('SUM', sequelize.col('cost')), 'total']],
    });
    return results[0].dataValues.total;
  }}

Data.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        purchase_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cost: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
        },
        note: {
            type: DataTypes.STRING,
        },
        emotion: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'data',
    }
);

module.exports = Data;