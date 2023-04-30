const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model {}

Budget.init(
    {
        month: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        income: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        expenses: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        savings: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        desiredBudget: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'budget',
    }
);

module.exports = Budget