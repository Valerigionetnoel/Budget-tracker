const { Data } = require('../../models');
const router = require('express').Router();
const sequelize = require('sequelize')

const getDataForSpendingChart = async (userId) => {
    try {
      const data = await Data.findAll({
        where: { user_id: userId },
        attributes: ['category', [sequelize.fn('sum', sequelize.col('cost')), 'total']],
        group: ['category'],
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  router.get('/chart-data', async (req, res) => {
    try {
      const data = await getDataForSpendingChart(req.session.user_id);
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router; 