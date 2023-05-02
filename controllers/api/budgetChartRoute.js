const { Data, Budget } = require('../../models');
const router = require('express').Router();
const sequelize = require('sequelize')

const getDataForBudgetChart = async (userId) => {
    try {
      const data = await Data.findAll({
        where: { user_id: userId },
        attributes: ['cost', [sequelize.fn('sum', sequelize.col('cost')), 'total']],
      });

      const userBudget = await Budget.findOne({
        where: {user_id: userId}, 
        attributes:  ['desiredBudget']
      })

      return { data , userBudget: userBudget ? desiredBudget: 0}
    } catch (err) {
      console.log(err);
    }
  };

  router.get('/budget-chart-data', async (req, res) => {
    try {
      const data = await getDataForBudgetChart(req.session.user_id);
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router; 