const router = require('express').Router();

router.get('/', (req, res) => {
  // Checks if user is logged in, if so redirecst to the dashboard
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

module.exports = router;