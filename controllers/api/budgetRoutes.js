const router = require('express').Router();
const { Budget } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Budget.findAll({})
      .then(budgetData => res.json(budgetData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});

router.get('/:id', (req, res) => {
  Budget.findAll({
          where: {
              id: req.params.id
          }
      })
      .then(budgetData => res.json(budgetData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newBudget = await Budget.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBudget);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const budgetData = await Budget.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!budgetData[0]) {
      res.status(404).json({ message: 'No budget data found with that user!' });
      return;
    }
    res.status(200).json(budgetData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!budgetData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;