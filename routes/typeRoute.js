let express = require('express');
let typeController = require('../controllers/typeController');

module.exports = () => {
    let router = express.Router();

    router.get('/', typeController.getAll);
    router.get('/:tp', typeController.getOne);
    router.post('/', typeController.addType);
    router.put('/', typeController.updateType);
    router.delete('/:tp', typeController.deleteType);

    return router;
}