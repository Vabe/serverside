/**
 * Get all the projects and places them on
 * res.locals.projects
 * @returns projects[]
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  const ProjectModel = requireOption(objectrepository, 'ProjectModel');

  return function (req, res, next) {
    // if (typeof res.locals.user === 'undefined') {
    //     return next();
    // }

    ProjectModel.find((err, projects) => {
      if (err) {
        return next(err);
      }

      res.locals.projects = projects;
      return next();
    });
  };
};
