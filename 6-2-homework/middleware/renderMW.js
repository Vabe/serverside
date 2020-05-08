/**
 * General render function
 * @param objectrepository object repository
 * @param viewName view to be displayed (without file extension)
 */

module.exports = (objectrepository, viewName) => {
  return function (req, res) {
    res.render(viewName);
  };
};
