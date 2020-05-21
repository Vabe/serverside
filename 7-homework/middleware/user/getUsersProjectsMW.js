/**
 * Get all the projects by a specific user
 * @returns projects[]
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  const ProjectModel = requireOption(objectrepository, 'ProjectModel');

  return function (req, res, next) {
    if (typeof res.locals.user === 'undefined') {
      console.log('getUsersProjectsMW - res.locals.user is undefined');
      return next();
    }

    ProjectModel.find({ _assignedTo: res.locals.user._id }, (err, projects) => {
      if (err) {
        return next(err);
      }

      res.locals.projects = projects;
      return next();
    });
  };
};
