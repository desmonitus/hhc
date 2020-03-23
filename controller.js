const indexRoute = require('./routes/index');
const loginRoute = require('./routes/login');

module.exports = function(app){

    const indexPath = '/';
    app.get(indexPath,indexRoute.get);
    app.get('/user', indexRoute.get);

    const loginPath = '/login';
    const check_loginPath = '/check_login';
    app.get(loginPath, loginRoute.get);
    app.post(check_loginPath, loginRoute.check);

    const logoutPath = '/logout';
    app.get(logoutPath,function(req,res){
        res.cookie('token','');
        res.redirect('/login');
    });
};