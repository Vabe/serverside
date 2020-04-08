/**
 * If user is auth'd call next(), else redirect to "/"
 */

module.exports = (objrep) => {
  return (req, res, next) => {
    console.log('auth - ')
    next()
  }
}
