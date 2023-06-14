let {Router} = require('express');
let passport = require('passport');
let authController = require('../controllers/authController');
let router = Router();

router.post('/auth/login', passport.authenticate('local', { session: false }), (req, res, next) => {
    const user = authController.getAccount(req);
    if (user) {res.json(user);}
    else {res.status(401).send({ success: false });}
});
router.get('/init', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    console.log(req.user);
    res.status(200).json(req.user);
});
router.post('/auth/signup', authController.signUpUser);
router.post('/logout', authController.logout);

module.exports = router;