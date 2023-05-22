let {Router} = require('express');
let passport = require('passport');
let orderController = require('../controllers/orderController');
let router = Router();

router.get('/orders', passport.authenticate('jwt', {session: false}), orderController.getOrders);
router.get('/orders/user/:userId', passport.authenticate('jwt', {session: false}), orderController.getOrdersByUserId);
router.get('/order/:orderId', passport.authenticate('jwt', {session: false}), orderController.getOrderByOrderId);
router.post('/order', passport.authenticate('jwt', {session: false}), orderController.createOrderForUserId);
router.put('/order/:orderId', passport.authenticate('jwt', {session: false}), orderController.editOrderByOrderId);
router.delete('/order/:orderId', passport.authenticate('jwt', {session: false}), orderController.deleteOrderByOrderId);
router.get('/orders/courier/:userId', passport.authenticate('jwt', {session: false}), orderController.getOrdersByCourierId);
router.get('/orders/status/:status', passport.authenticate('jwt', {session: false}), orderController.getOrdersByStatus);

module.exports = router;