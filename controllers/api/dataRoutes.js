const router = require('express').Router();
const { Data } = require('../../models');
const withAuth = require('../../utils/auth');



router.get('/', withAuth, async (req, res) => {
  try {
    const inputData = await Data.findAll({
      where: {
        user_id: req.session.user_id, // Only fetch data for the logged-in user
      },
      raw: true, // Return plain objects instead of Sequelize model instances
    });

    res.render('dashboard', { inputData });
  } catch (err) {
    res.status(400).json(err);
  }  
});

router.post('/', withAuth, async (req, res) => {
  try {
    const userInputData = await Data.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(userInputData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const userInputData = await Data.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!userInputData[0]) {
      res.status(404).json({ message: 'No data found!' });
      return;
    }
    res.status(200).json(userInputData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const userInputData = await Data.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!userInputData) {
      res.status(404).json({ message: 'Please check data id!' });
      return;
    }

    res.status(200).json(userInputData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;