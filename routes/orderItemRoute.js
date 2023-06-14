let {Router} = require('express');
let passport = require('passport');
let orderItemController = require('../controllers/orderItemController');
let router = Router();

router.get('/orderItems/:orderId', passport.authenticate('jwt', {session: false}), orderItemController.getOrderItemsByOrderId);
router.get('/orderItem/:orderItemId', passport.authenticate('jwt', {session: false}), orderItemController.getOrderItemByOrderItemId);
router.post('/orderItem', passport.authenticate('jwt', {session: false}), orderItemController.createOrderItemForOrderId);
router.delete('/orderItem/:orderItemId', passport.authenticate('jwt', {session: false}), orderItemController.deleteOrderItemByOrderItemId);

module.exports = router;