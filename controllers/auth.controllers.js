var md5 = require('md5');

const db = require('../db');

module.exports.login = (req, res) => {
    res.render('auth/login');
};

module.exports.postLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = db.get('users').find({ email: email}).value();

    if (!user) {
        res.render('auth/login', {
            erros: [
                'User does not exist'
            ],
            value: req.body
        });
        return;
    }
    
    let hashPassword = md5(password)

    if (user.password !== hashPassword) {
        res.render('auth/login', {
            erros: [
                'Wrong password'
            ],
            value: req.body
        });
        return;
    }

    res.cookie('userId', user.id);
    res.redirect('/users');
}