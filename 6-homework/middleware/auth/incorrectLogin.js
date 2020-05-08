/**
 * Checks login fields
 *    if validated call next
 *    else redirect to 'index.html/?err=pw
 */
const requireOption = require('../requireOption');
module.exports = (objrep) => {
  return (req, res, next) => {
    if (typeof req.body.password === 'undefined')
      return next();

    if (req.body.password === 'imNotHashing') {
      req.session.loggedIn = true;  
      return req.session.save(err => res.redirect('/projects'));
    }

    res.locals.error = "Incorrect Password";
    return next();
  }
}
