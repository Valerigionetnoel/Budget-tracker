const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Spending extends Model { }

Spending.init(
    {
        month: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'data',
    }
)

module.exports = Spending