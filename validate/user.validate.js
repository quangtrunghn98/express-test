module.exports.postCreate = (req, res, next) => {
    let erros = [];

    if (!req.body.name) {
        erros.push('Name is required');
    }
    if (!req.body.phone) {
        erros.push('Phone is required');
    }

    if (erros.length) {
        res.render('users/create', {
            erros: erros,
            values: req.body
        });
        return;
    }
    
    next();
}