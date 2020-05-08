/**
 * Get user
 * @returns user
 */

const requireOption = require('../requireOption')

module.exports = (objrep) => {
  const UserModel = requireOption(objrep, 'UserModel')

  return (req, res, next) => {
    console.log('getUser - ')

    UserModel.findOne({ _id: req.params.userid }, function (err, user) {
      if (err || !user) return next(err)

      res.locals.user = user
      return next()
    })
  }
}
