
const authMW = require('../middleware/auth/authMW');
const checkPasswordMW = require('../middleware/auth/checkPasswordMW');
const logOutMW = require('../middleware/auth/logOutMW');

const getProjectMW = require('../middleware/project/getProjectMW');
const getProjectsMW = require('../middleware/project/getProjectsMW');
const deleteProjectMW = require('../middleware/project/deleteProjectMW');
const saveProjectMW = require('../middleware/project/saveProjectMW');

const getUserMW = require('../middleware/user/getUserMW');
const getUsersMW = require('../middleware/user/getUsersMW');
const getUsersProjectsMW = require('../middleware/user/getUsersProjectsMW');
const deleteUserMW = require('../middleware/user/deleteUserMW');
const saveUserMW = require('../middleware/user/saveUserMW');

const renderMW = require('../middleware/renderMW');

const UserModel = require('../models/user');
const ProjectModel = require('../models/project');

module.exports = function (app) {
  const objrep = {
    UserModel: UserModel,
    ProjectModel: ProjectModel
  }

  app.use('/projects/new', authMW(objrep), getUserMW(objrep), saveProjectMW(objrep), renderMW(objrep, 'project-new'));

  app.get('/projects/:projectid/delete', authMW(objrep), getProjectMW(objrep), deleteProjectMW(objrep));

  app.get('/projects/:projectid/edit', authMW(objrep), getProjectMW(objrep) );

  app.use('/projects/:projectid', authMW(objrep), getProjectMW(objrep), saveProjectMW(objrep), renderMW(objrep, 'projectid'));

  app.use('/projects', authMW(objrep), getProjectsMW(objrep), renderMW(objrep, 'projects'));

  app.use('/users/new', authMW(objrep), saveUserMW(objrep), renderMW(objrep, 'user-new'));

  app.get('/users/:userid/delete', authMW(objrep), getUserMW(objrep), deleteUserMW(objrep));

  app.use('/users/:userid/project/new', authMW(objrep), getUserMW(objrep), saveProjectMW(objrep), renderMW(objrep, 'project-new'));

  app.use('/users/:userid', authMW(objrep), getUserMW(objrep), getUsersProjectsMW(objrep), renderMW(objrep, 'userid'));

  app.use('/users', authMW(objrep), getUsersMW(objrep), renderMW(objrep, 'users'));

  app.use('/logout', logOutMW(objrep));

  app.use('/!/login', checkPasswordMW(objrep), renderMW(objrep, 'index'));

  app.use('/', function (req, res) { res.redirect('/!/login'); });
}