let {Router} = require('express');
let passport = require('passport');
let apiController = require('../controllers/apiController');
let router = Router();

router.post('/api/payment', passport.authenticate('jwt', { session: false }), apiController.payForOrder);

module.exports = router;