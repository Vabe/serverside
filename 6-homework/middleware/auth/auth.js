/**
 * If user is auth'd call next(), else redirect to "/"
 */
const requireOption = require('../requireOption');

module.exports = (objrep) => {
  return (req, res, next) => {
    if (typeof req.session.loggedIn === 'undefined' || req.session.loggedIn !== true) {
      return res.redirect('/projects');
    }
    next();
  }
}
