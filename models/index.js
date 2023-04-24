const User = require('./User');
const Data = require('./Data');

User.hasMany(Data, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Data.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Data }
