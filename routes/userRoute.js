let express = require('express');
let passport = require('passport');
let userController = require('../controllers/userController');

module.exports = () => {
    let router = express.Router();

    router.get('/user', passport.authenticate('jwt', {session: false}), userController.getUsers);
    router.get('/user/:id', passport.authenticate('jwt', {session: false}), userController.getUserById);
    router.put('/user/:id', passport.authenticate('jwt', {session: false}), userController.editUserById);
    router.delete('/user/:id', passport.authenticate('jwt', {session: false}), userController.deleteUserById);

    return router;
}