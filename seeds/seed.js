const sequelize = require('../config/connection');
const { User, Data, Budget } = require('../models');

const userData = require('./user.json');
const dataData = require('./data.json');
const budgetData = require('./budget.json');

const seedDataBase = async () => {
    await sequelize.sync({force: true});

    

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const data = await Data.bulkCreate(dataData, {
        individualHooks: true,
        returning: true,
    });

    const budget = await Budget.bulkCreate(budgetData, {
        individualHooks: true,
        returning: true,
    });

    // for (const { id } of data) {
    //     const newUser = await User.create({
    //         user_id: id,
    //     });
    // }

    // const users = await Data.bulkCreate(userData, {
    //     individualHooks: true,
    //     returning: true,
    // })

    // for (const user of userData) {
    //     const newUser = await User.create({
    //         ...user,
    //         user_id : 1,
    //     });
    // }

    process.exit(0);
};

seedDataBase();