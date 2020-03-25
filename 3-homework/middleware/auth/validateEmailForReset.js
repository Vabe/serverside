/**
 * Check the email address on password reset
 *    if validated forward to 'index.html'
 *    else redirect to 'reset.html/?err=email
 */

module.exports = (objrep) => {
  return (req, res, next) => {
    console.log('validateEmailForReset - ')
    next()
  }
}
