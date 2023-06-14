let {Router} = require('express');
let passport = require('passport');
let cartController = require('../controllers/cartController');
let router = Router();

router.get('/cart/user/:userId', passport.authenticate('jwt', {session: false}), cartController.getCartByUserId);
router.post('/cart', passport.authenticate('jwt', {session: false}), cartController.createCartForUserId);
router.delete('/cart/user/:userId', passport.authenticate('jwt', {session: false}), cartController.deleteCartsByUserId);

module.exports = router;