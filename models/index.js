const User = require('./User');
const Data = require('./Data');
const Spending = require('./Spending')
const Budget = require('./Budget')

User.hasMany(Data, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Spending, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasOne(Budget, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Data.belongsTo(User, {
    foreignKey: 'user_id'
});

Spending.belongsTo(User, {
    foreignKey: 'user_id'
})

Budget.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Data, Spending, Budget }
