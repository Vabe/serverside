/**
 * Checks login info (password and email)
 * sets loggedIn to true
 * redirects to /projects
 */
module.exports = function (objrep) {
  return function (req, res, next) {
    if (typeof req.body.password === 'undefined' || typeof req.body.email === 'undefined') {
      return next()
    }

    if (req.body.password === 'nohash' && req.body.email === 'bence@valent.com') {
      req.session.loggedIn = true
      return req.session.save((err) => res.redirect('/projects'))
    }

    next()
  }
}
