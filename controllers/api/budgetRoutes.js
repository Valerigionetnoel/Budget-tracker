const router = require('express').Router();
const { Budget } = require('../../models');
const withAuth = require('../../utils/auth');

// router to post the budget from the modalå
router.post('/', withAuth, async (req, res) => {
  console.log('Request body:', req.body);
  try {
    const userBudget = await Budget.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log('hey there');
    res.status(200).json(userBudget);
  } catch (err) {
    console.error('Error', err);
    res.status(400).json(err);
  }
});

// router to delete the budget, when that button is made
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.destroy({
      where: {
        user_id: req.session.user_id,
      },
    });

    if (!budgetData) {
      res.status(404).json({ message: 'No budget data found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;