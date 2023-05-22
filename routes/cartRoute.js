let {Router} = require('express');
let passport = require('passport');
let cartController = require('../controllers/cartController');
let router = Router();

router.get('/carts/user/:userId', passport.authenticate('jwt', {session: false}), cartController.getCartsByUserId);
router.get('/carts/:menuId/menu', passport.authenticate('jwt', {session: false}), cartController.getCartsByMenuId);
router.get('/cart/:cartId', passport.authenticate('jwt', {session: false}), cartController.getCartByCartId);
router.post('/cart', passport.authenticate('jwt', {session: false}), cartController.createCartForUserId);
router.put('/cart/:cartId', passport.authenticate('jwt', {session: false}), cartController.editCartByCartId);
router.delete('/cart/:cartId', passport.authenticate('jwt', {session: false}), cartController.deleteCartByCartId);
router.delete('/carts/user/:userId', passport.authenticate('jwt', {session: false}), cartController.deleteCartsByUserId);

module.exports = router;