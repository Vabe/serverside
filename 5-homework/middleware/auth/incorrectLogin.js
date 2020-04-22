/**
 * Checks login fields
 *    if validated call next
 *    else redirect to 'index.html/?err=pw
 */

module.exports = (objrep) => {
  return (req, res, next) => {
    console.log('incorrentLogin - ')
    if (typeof req.body.password === 'undefined')
      next()

    if (req.body.password === 'imNotHashing')
      res.redirect('/projects')

    res.locals.error = "Incorrect Password"
    next()
  }
}
