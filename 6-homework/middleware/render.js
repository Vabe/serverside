/**
 * General render function
 */
const requireOption = require('./requireOption');

module.exports = (objectrepository, viewName) => {
  return function(req, res) {
    res.render(viewName);
  }
}
