/**
 * Delete current user
 * logs error if there's any
 */
module.exports = function (objrep) {
  return function (req, res, next) {
    if (typeof res.locals.user === 'undefined') {
      next()
    }

    res.locals.user.remove((err) => {
      if (err) {
        console.log('deleteUserMW - error removing')
        next(err)
      }

      return res.redirect('/users')
    })
  }
}
