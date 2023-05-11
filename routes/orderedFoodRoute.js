let express = require('express');
let orderedFoodController = require('../controllers/orderedFoodController');

module.exports = () => {
    let router = express.Router();

    router.get('/', orderedFoodController.getAll);
    router.get('/food/:fo', orderedFoodController.getByFood);
    router.get('/order/:or', orderedFoodController.getByOrder);
    router.get('/:of', orderedFoodController.getOne);
    router.post('/', orderedFoodController.addOrderedFood);
    router.put('/', orderedFoodController.updateOrderedFood);
    router.delete('/:of', orderedFoodController.deleteOrderedFood);

    return router;
}