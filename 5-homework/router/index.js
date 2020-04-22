const auth = require('../middleware/auth/auth')
const incorrectLogin = require('../middleware/auth/incorrectLogin')
const validate = require('../middleware/auth/validate')
const validateEmailForReset = require('../middleware/auth/validateEmailForReset')
const createProject = require('../middleware/project/createProject')
const deleteProject = require('../middleware/project/deleteProject')
const getProject = require('../middleware/project/getProject')
const getProjects = require('../middleware/project/getProjects')
const updateProject = require('../middleware/project/updateProject')
const createUser = require('../middleware/user/createUser')
const getUser = require('../middleware/user/getUser')
const getUsers = require('../middleware/user/getUsers')
const render = require('../middleware/render')

const UserModel = require('../models/user')
const ProjectModel = require('../models/project')

module.exports = (app) => {
  const objrep = {
    UserModel: UserModel,
    ProjectModel: ProjectModel
  }

  app.use('/login/reset', validateEmailForReset(objrep), render(objrep, 'reset'))

  app.use('/login', validate(objrep), render(objrep, 'index'))

  app.use('/project/new', auth(objrep), createProject(objrep), render(objrep, 'project-new'))

  app.use(
    '/projects/:id',
    auth,
    getProject(objrep),
    updateProject(objrep),
    deleteProject(objrep),
    render(objrep, 'project-id-update')
  )

  app.use('/projects', auth(objrep), getProjects(objrep), render(objrep, 'projects'))

  app.use(
    '/users/new',
    auth(objrep),
    getUser(objrep),
    createUser(objrep),
    render(objrep, 'user-new')
  )

  app.use(
    '/users/:userid',
    auth(objrep),
    getUser(objrep),
    getProjects(objrep),
    render(objrep, 'user-id')
  )

  app.use('/users', auth(objrep), getUsers(objrep), render(objrep, 'users'))

  app.use('/', incorrectLogin(objrep), render(objrep, 'index'))
}
