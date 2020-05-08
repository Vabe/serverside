/**
 * Create base user if there's none in the db
 * email:     bence@valent.com
 * password:  nohash
 */
const requireOption = require('../requireOption');

module.exports = function (objrep) {
  const UserModel = requireOption(objrep, 'UserModel');

  return function (req, res, next) {
    UserModel.find((err, users) => {
      if (err) {
        return next(err);
      }

      if (users.length == 0) {
        res.locals.user = new UserModel();

        res.locals.user.name = 'Bence Valent';
        res.locals.user.email = 'bence@valent.com';
        res.locals.user.password = 'nohash';

        res.locals.user.save((err) => {
          if (err) {
            return next(err);
          }

          return res.redirect('/users');
        });
      } else {
        return next();
      }
    });
  };
};
