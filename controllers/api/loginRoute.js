const router = require('express').Router();

router.get('/', (req, res) => {
  // Check if the user is already logged in
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

module.exports = router;