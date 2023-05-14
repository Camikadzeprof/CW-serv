let express = require('express');
let passport = require('passport');
let cartController = require('../controllers/cartController');

module.exports = () => {
    let router = express.Router();

    router.get('/carts/:orderId', passport.authenticate('jwt', {session: false}), cartController.getCartsByUserId);
    router.get('/carts/:menuId/menu', passport.authenticate('jwt', {session: false}), cartController.getCartsByMenuId);
    router.get('/cart/:cartId', passport.authenticate('jwt', {session: false}), cartController.getCartByCartId);
    router.post('/cart', passport.authenticate('jwt', {session: false}), cartController.createCartForUserId);
    router.put('/cart/:cartId', passport.authenticate('jwt', {session: false}), cartController.editCartByCartId);
    router.delete('/cart/:cartId', passport.authenticate('jwt', {session: false}), cartController.deleteCartByCartId);

    return router;
}