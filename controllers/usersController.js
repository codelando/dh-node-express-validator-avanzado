const jsonTable = require('../database/jsonTable');
const usersModel = jsonTable('users');

module.exports = {
    index: (req, res) => {

        let users = usersModel.all()

        res.render('users/index',  { users });
    },
    create: (req, res) => {
        res.render('users/create');
    },
    store: (req, res) => {
        let user = req.body;

        userId = usersModel.create(user);

        res.redirect('/users/' + userId);
    },
    show: (req, res) => {
        let user = usersModel.find(req.params.id);

        res.render('users/detail', { user });
    }
}