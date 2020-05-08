/**
 * Save or update current project
 * if update:
 *    forward to user's page
 * if save:
 *    forwards to projects
 */
const requireOption = require('../requireOption');

module.exports = function (objrep) {
  const ProjectModel = requireOption(objrep, 'ProjectModel');

  return function (req, res, next) {
    if (typeof req.body.title === 'undefined' || typeof req.body.createdAt === 'undefined') {
      return next();
    }

    if (typeof res.locals.project === 'undefined') {
      res.locals.project = new ProjectModel();
    }

    res.locals.project.title = req.body.title;
    res.locals.project.desc = req.body.desc;
    res.locals.project.createdAt = req.body.createdAt;

    if (typeof req.params.userid !== 'undefined') {
      res.locals.project._assignedTo = req.params.userid;
    }

    res.locals.project.save((err) => {
      if (err) {
        return next(err);
      }
      if (typeof req.params.userid !== 'undefined') {
        return res.redirect(`/users/${req.params.userid}`);
      }
      return res.redirect(`/projects`);
    });
  };
};
