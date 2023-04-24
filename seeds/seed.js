const sequelize = require('../config/connection');
const { User, Data } = require('../models');

const userData = require('./user.json');
const dataData = require('./data.json')

const seedDataBase = async () => {
    await sequelize.sync({force: true});

    const data = await Data.bulkCreate(dataData, {
        individualHooks: true,
        returning: true,
    });

    const user = await User.bulkCreate(userData)

    // for (const { id } of data) {
    //     const newUser = await User.create({
    //         user_id: id,
    //     });
    // }

    // const users = await Data.bulkCreate(userData, {
    //     individualHooks: true,
    //     returning: true,
    // })

    for (const users of userData) {
        const newUser = await User.create({
            ...users,
            user_id : user.id,
        });
    }

    process.exit(0);
};

seedDataBase();