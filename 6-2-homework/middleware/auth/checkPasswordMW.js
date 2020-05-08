/**
 * Checks if email and password exists in db, if true:
 * sets loggedIn to true
 * redirects to /projects
 */
const requireOption = require('../requireOption');

module.exports = function (objrep) {
  const UserModel = requireOption(objrep, 'UserModel');

  return function (req, res, next) {
    if (typeof req.body.password === 'undefined' || typeof req.body.email === 'undefined') {
      return next();
    }

    req.session.loggedIn = false;

    const user = UserModel.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
      if (err || !user) {
        return next(err);
      }
      req.session.loggedIn = true;
      return req.session.save((err) => res.redirect('/projects'));
    });
  };
};
