/**
 * Logs user out (and redirects) by
 * removing session
 */

module.exports = function(objectrepository) {
    return function(req, res, next) {
        req.session.destroy(err => {
            res.redirect('/');
        });
    };
};
