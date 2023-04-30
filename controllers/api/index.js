const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dataRoutes = require('./dataRoutes');
const loginRoute = require('./loginRoute');
const dashboardRoutes = require('./dashboardRoutes')

router.use('/users', userRoutes);
router.use('/data', dataRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/login', loginRoute)

module.exports = router;