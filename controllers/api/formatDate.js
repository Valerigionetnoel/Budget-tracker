const router = require('express').Router();
const { Data } = require('../../models');
const withAuth = require('../../utils/auth');
const moment = require('moment')


router.get('/api/data', async (req, res) => {
    try {
        const transactionDate = await Data.findAll();

        const formattedTransactions = transactionDate.map((transaction) => {
            const formattedDate = moment(transaction.date_created).format('ddd MMM DD'); 
            return {
            ...transaction.toJSON(),
            date_created :formattedDate
            };
        });
        res.json(formattedTransactions);
    } catch {
        console.error(err);
    res.status(500).json({ error: 'An error occurred while formatting the date' });
  }
    });


module.exports = router;