/**
 * Create base user if there's none in the db
 * email:     bence@valent.com
 * password:  nohash
 */
const requireOption = require('../requireOption')

module.exports = function (objrep) {
  const UserModel = requireOption(objrep, 'UserModel')

  return function (req, res, next) {
    console.log('user registry')
    UserModel.find((err, users) => {
      if (err) {
        return next(err)
      }
      console.log('insteide e user registry')
      console.log(users)

      if (users.length == 0) {
        console.log('inside undefined users')
        res.locals.user = new UserModel()

        res.locals.user.name = 'Bence Valent'
        res.locals.user.email = 'bence@valent.com'
        res.locals.user.password = 'nohash'

        res.locals.user.save((err) => {
          if (err) {
            return next(err)
          }

          return res.redirect('/users')
        })
      } else {
        return next()
      }
    })
  }
}
