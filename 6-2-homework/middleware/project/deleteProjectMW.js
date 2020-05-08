module.exports = function(objrep) {
  
  return function (req, res, next) {

    if (typeof res.locals.project === 'undefined') {
      next();
    }

    res.locals.project.remove((err) => {
      if (err) {
        console.log('err')
        next(err);
      }

      return res.redirect('/projects');
    })
  }
}