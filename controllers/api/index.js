const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dataRoutes = require('./dataRoutes');
const loginRoute = require('./loginRoute');
const dashboardRoutes = require('./dashboardRoutes')
const budgetRoutes = require('./budgetRoutes');
const spendingRoutes = require('./budgetRoutes');



router.use('/users', userRoutes);
router.use('/data', dataRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoute);
router.use('/budget', budgetRoutes);
router.use('/spending', spendingRoutes);

module.exports = router;