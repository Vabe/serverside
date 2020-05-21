/**
 * Get one specific project and places it on
 * res.locals.project
 * @returns project
 */

const requireOption = require('../requireOption');

module.exports = function (objrep) {
  const ProjectModel = requireOption(objrep, 'ProjectModel');

  return function (req, res, next) {
    ProjectModel.findOne({ _id: req.params.projectid }, (err, project) => {
      if (err || !project) {
        return next(err);
      }

      res.locals.project = project;
      return next();
    });
  };
};
