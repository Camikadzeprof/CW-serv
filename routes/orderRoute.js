let express = require('express');
let passport = require('passport');
let orderController = require('../controllers/orderController');

module.exports = () => {
    let router = express.Router();

    router.get('/orders/:userId/user', passport.authenticate('jwt', {session: false}), orderController.getOrdersByUserId);
    router.get('/order/:orderId', passport.authenticate('jwt', {session: false}), orderController.getOrderByOrderId);
    router.post('/order', passport.authenticate('jwt', {session: false}), orderController.createOrderForUserId);
    router.put('/order/:orderId', passport.authenticate('jwt', {session: false}), orderController.editOrderByOrderId);
    router.delete('/order/:orderId', passport.authenticate('jwt', {session: false}), orderController.deleteOrderByOrderId);

    return router;
}