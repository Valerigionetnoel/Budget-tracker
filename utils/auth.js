const withAuth = (req, res, next) => {
  // Authentication to constanlt check if the user is logged in.
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
