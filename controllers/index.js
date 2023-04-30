const router = require('express').Router();

const apiRoutes = require('./api');
const LoginRoutes = require('./api/loginRoute');
const dashboardRoutes = require('./api/dashboardRoutes')

router.use('/api', apiRoutes);
router.use('/', LoginRoutes);
router.use('/', dashboardRoutes);

module.exports = router;