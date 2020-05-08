/**
 * Logs user out (destroys session)
 * forwards to login
 */
module.exports = function (objrep) {
  return function (req, res, next) {
    req.session.destroy((err) => {
      res.redirect('/!/login')
    })
  }
}
