/**
 * Get one specific project
 * @returns project
 */

const requireOption = require('../requireOption');

module.exports = function(objrep) {
  const UserModel = requireOption(objrep, 'UserModel');

  return function(req, res, next) {
    UserModel.findOne({ _id: req.params.userid }, (err, user) => {
      if (err || !user) {
        return next(err);
      }

      res.locals.user = user;
      return next();
    });
  };
};