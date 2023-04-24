const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Data extends Model {}

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
            type: DataTypes.DECIMAL,
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