module.exports = function (objrep) {
  return function (req, res, next) {

    if (typeof req.body.password === 'undefined') {
        return next();
    }

    // if (req.body.password === 'nohash') {
    //   req.session.loggedIn = true;
    //   return req.session.save(err => res.redirect('/projects'));
    // }

    if (req.body.password === '') {
      req.session.loggedIn = true;
      return req.session.save(err => res.redirect('/projects'));
    }

    next();
  }
}