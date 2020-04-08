/**
 * Checks login fields
 *    if validated call next
 *    else redirect to 'index.html/?err=pw
 */

module.exports = (objrep) => {
  return (req, res, next) => {
    console.log('validate - ')
    next()
  }
}
