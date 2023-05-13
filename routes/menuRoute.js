let express = require('express');
let passport = require('passport');
let menuController = require('../controllers/menuController');

module.exports = () => {
    let router = express.Router();

    router.get('/menu/:typeId', passport.authenticate('jwt', {session: false}), menuController.getMenuByTypeId);
    router.get('/menu/:menuId', passport.authenticate('jwt', {session: false}), menuController.getMenuByMenuId);
    router.post('/menu', passport.authenticate('jwt', {session: false}), menuController.createMenuForTypeId);
    router.put('/menu/:menuId', passport.authenticate('jwt', {session: false}), menuController.editMenuByMenuId);
    router.delete('/menu/:menuId', passport.authenticate('jwt', {session: false}), menuController.deleteMenuByMenuId);

    return router;
}