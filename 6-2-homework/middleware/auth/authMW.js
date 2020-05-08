/**
 * Check whether the user is logged in or not
 * (if has an active session)
 */
module.exports = (objrep) => {
  return (req, res, next) => {
    if (typeof req.session.loggedIn === 'undefined' || req.session.loggedIn === false) {
      return res.redirect('/');
    }

    next();
  };
};
