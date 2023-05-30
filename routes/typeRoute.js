let {Router} = require('express');
let passport = require('passport');
let typeController = require('../controllers/typeController');
let router = Router();

router.get('/type', typeController.getTypes);
router.get('/type/:name', typeController.getTypeByName);
router.post('/type', passport.authenticate('jwt', {session: false}), typeController.createType);
router.put('/type/:typeId', passport.authenticate('jwt', {session: false}), typeController.editTypeById);
router.delete('/type/:typeName', passport.authenticate('jwt', {session: false}), typeController.deleteTypeByName);

module.exports = router;