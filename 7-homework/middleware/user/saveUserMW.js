/**
 * Save or update current user
 */
const requireOption = require('../requireOption');

module.exports = function (objrep) {
  const UserModel = requireOption(objrep, 'UserModel');

  return function (req, res, next) {
    if (
      typeof req.body.name === 'undefined' ||
      typeof req.body.email === 'undefined' ||
      typeof req.body.password === 'undefined'
    ) {
      return next();
    }

    if (typeof res.locals.user === 'undefined') {
      res.locals.user = new UserModel();
    }

    res.locals.user.name = req.body.name;
    res.locals.user.email = req.body.email;
    res.locals.user.password = req.body.password;

    res.locals.user.save((err) => {
      if (err) {
        return next(err);
      }

      return res.redirect('/users');
    });
  };
};
