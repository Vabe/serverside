/**
 * Delete current project
 * logs error if there's any
 */
module.exports = function (objrep) {
  return function (req, res, next) {
    if (typeof res.locals.project === 'undefined') {
      next()
    }

    res.locals.project.remove((err) => {
      if (err) {
        console.log('deleteProjectMW - error removing')
        next(err)
      }

      return res.redirect('/projects')
    })
  }
}
