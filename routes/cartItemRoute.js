let {Router} = require('express');
let passport = require('passport');
let cartItemController = require('../controllers/cartItemController');
let router = Router();

router.get('/cartItems/cart/:cartId', passport.authenticate('jwt', {session: false}), cartItemController.getCartItemsByCartId);
router.get('/cartItem/:cartItemId', passport.authenticate('jwt', {session: false}), cartItemController.getCartItemByCartItemId);
router.post('/cartItem', passport.authenticate('jwt', {session: false}), cartItemController.createCartItemForCartId);
router.put('/cartItem/:cartItemId', passport.authenticate('jwt', {session: false}), cartItemController.editCartItemByCartItemId);
router.delete('/cartItem/:cartItemId', passport.authenticate('jwt', {session: false}), cartItemController.deleteCartItemByCartItemId);

module.exports = router;