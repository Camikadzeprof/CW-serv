let express = require('express');
let orderController = require('../controllers/orderController');

module.exports = () => {
    let router = express.Router();

    router.get('/', orderController.getAll);
    router.get('/user/:us', orderController.getByUser);
    router.get('/:or', orderController.getOne);
    router.post('/', orderController.addOrder);
    router.put('/', orderController.updateOrder);
    router.delete('/:or', orderController.deleteOrder);

    return router;
}