let {Router} = require('express');
let passport = require('passport');
let userController = require('../controllers/userController');
let router = Router();

router.get('/user', passport.authenticate('jwt', {session: false}), userController.getUsers);
router.get('/user/:id', passport.authenticate('jwt', {session: false}), userController.getUserById);
router.put('/user/:id', passport.authenticate('jwt', {session: false}), userController.editUserById);
router.delete('/user/:id', passport.authenticate('jwt', {session: false}), userController.deleteUserById);

module.exports = router;