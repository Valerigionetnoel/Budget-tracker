const router = require('express').Router();
const { Data, User, Budget } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/dashboard', async (req, res) => {
  console.log('hello')
  try {
    const inputData = await Data.findAll({
      where: {
        user_id: req.session.user_id, // Only fetch data for the logged-in user
      },
      raw: true, // Return plain objects instead of Sequelize model instances
    });

    const userData = await User.findByPk(req.session.user_id);
    const userDataJSON = userData.toJSON();
    console.log(`User data for user ID ${req.session.user_id}:`, userData);

    const loggedIn = req.session.user_id ? true : false;

    const userBudget = await Budget.findByPk(req.session.user_id);
    let userBudgetJSON;
    if (userBudget) {
      userBudgetJSON = userBudget.toJSON();
    } else {
    userBudgetJSON = null;
    }

    console.log(`Data for user ID ${req.session.user_id}:`, inputData);
    res.render('dashboard', { inputData, userData: userDataJSON, loggedIn, userBudget: userBudgetJSON });
  } catch (err) {
    res.status(400).json(err);
  }  
});

module.exports = router;