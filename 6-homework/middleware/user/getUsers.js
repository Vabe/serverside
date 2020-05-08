/**
 * Get all the users
 * @returns users[]
 */

const requireOption = require('../requireOption')

module.exports = (objrep) => {
  const UserModel = requireOption(objrep, 'UserModel')

  return (req, res, next) => {
    console.log('getUsers - ')

    UserModel.find({}, function (err, users) {
      if (err) return next(err)
      res.locals.users = users
      return next()
    })
  }
}
