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

    // for (const { id } of data) {
    //     const newUser = await User.create({
    //         user_id: id,
    //     });
    // }

    for( const user of userData) {
        const newUser = await User.create({
            ...user,
            user_id : data[Math.floor(Math.random() * user.length)].id,
        });
    }

    process.exit(0);
};

seedDataBase();