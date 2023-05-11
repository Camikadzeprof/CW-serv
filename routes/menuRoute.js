let express = require('express');
let menuController = require('../controllers/menuController');

module.exports = () => {
    let router = express.Router();

    router.get('/', menuController.getAll);
    router.get('/type/:tp', menuController.getByType);
    router.get('/:mn', menuController.getOne);
    router.post('/', menuController.addItem);
    router.put('/', menuController.updateItem);
    router.delete('/:mn', menuController.deleteItem);

    return router;
}