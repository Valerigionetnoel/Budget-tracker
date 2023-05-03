const router = require('express').Router();
const { Data } = require('../../models');
const withAuth = require('../../utils/auth');


// get the data to post to the transactions
router.post('/', async (req, res) => {
  console.log('Request body:', req.body);
  try {
    console.log('hey sir')
    const userInputData = await Data.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(userInputData);
  } catch (err) {
   console.error('Error', err);
    res.status(400).json(err);
  }
});

// get the data to delete the transactions 
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