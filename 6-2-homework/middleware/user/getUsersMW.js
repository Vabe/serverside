/**
 * Get all the users and places them on
 * res.locals.users
 * @returns users[]
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  const UserModel = requireOption(objectrepository, 'UserModel');

  return function (req, res, next) {
    // if (typeof res.locals.user === 'undefined') {
    //     return next();
    // }

    UserModel.find((err, users) => {
      if (err) {
        return next(err);
      }

      res.locals.users = users;
      return next();
    });
  };
};
