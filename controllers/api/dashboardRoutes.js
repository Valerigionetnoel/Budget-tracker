const router = require('express').Router();
const { Data } = require('../../models');
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
    console.log(`Data for user ID ${req.session.user_id}:`, inputData);
    res.render('dashboard', { inputData });
  } catch (err) {
    res.status(400).json(err);
  }  
});

module.exports = router;