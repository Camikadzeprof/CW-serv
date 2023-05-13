let express = require('express');
let passport = require('passport');
let typeController = require('../controllers/typeController');

module.exports = () => {
    let router = express.Router();

    router.get('/type', passport.authenticate('jwt', {session: false}), typeController.getTypes);
    router.get('/type/:name', passport.authenticate('jwt', {session: false}), typeController.getTypeByName);
    router.post('/type', passport.authenticate('jwt', {session: false}), typeController.createType);
    router.put('/type/:typeId', passport.authenticate('jwt', {session: false}), typeController.editTypeById);
    router.delete('/type/:typeName', passport.authenticate('jwt', {session: false}), typeController.deleteTypeByName);

    return router;
}