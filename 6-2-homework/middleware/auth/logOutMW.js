module.exports = function (objrep) {
    return function(req, res, next) {
        req.session.destroy(err => {
            res.redirect('/!/temp');
        });
    };
};