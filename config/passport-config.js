let LocalStrategy = require('passport-local').Strategy;
let bcrypt = require('bcrypt');
let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
let User = require('../models/user.model');

const initializePassport = (passport) => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'secret';
    const authenticateUser = async (username, password, done) => {
        const user = await User.findOne({username: username});
        if (!user) {
            return done(null, false, {message: 'Incorrect username'});
        }
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            return done(null, {id: user.id, username: user.username, role: user.role});
        }
        else {
            return done(null, false, {message: 'Incorrect password'});
        }
    }
    passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
        User.findById(jwt_payload.id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, {id: user.id, username: user.username, role: user.role});
            } else {
                done(null, false);
            }
        });
    }))
    passport.use(new LocalStrategy({usernameField: 'login', passwordField: 'password'}, authenticateUser));
}

module.exports = initializePassport;