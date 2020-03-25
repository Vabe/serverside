/**
 * Creates new project
 */

module.exports = (objrep) => {
  return (req, res, next) => {
    console.log('createProject - ')
    next()
  }
}

/*
		if (typeof req.body.title === 'undefined')
			return next();
		if (typeof req.body.owner === 'undefined')
			return next();
		.worked
			res.redirect('/project')
		res.locals
		next();
*/
