const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model {}

Budget.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }, 
        date_created: {
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.NOW,
        },
        income: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        //expenses: {
            //type: DataTypes.FLOAT,
            //allowNull: false,
        //},
        savings: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        desiredBudget: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
    },
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