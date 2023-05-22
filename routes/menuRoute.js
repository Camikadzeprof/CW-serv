let {Router} = require('express');
let passport = require('passport');
let menuController = require('../controllers/menuController');
let router = Router();

router.get('/menu/type/:typeId', passport.authenticate('jwt', {session: false}), menuController.getMenuByTypeId);
router.get('/menu', passport.authenticate('jwt', {session: false}), menuController.getMenu)
router.get('/menu/:menuId', passport.authenticate('jwt', {session: false}), menuController.getMenuByMenuId);
router.get('/menu/name/:name', passport.authenticate('jwt', {session: false}), menuController.getMenuByName);
router.post('/menu', passport.authenticate('jwt', {session: false}), menuController.createMenuForTypeId);
router.put('/menu/:menuId', passport.authenticate('jwt', {session: false}), menuController.editMenuByMenuId);
router.delete('/menu/:menuId', passport.authenticate('jwt', {session: false}), menuController.deleteMenuByMenuId);

module.exports = router;