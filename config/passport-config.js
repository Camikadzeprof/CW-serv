let LocalStrategy = require('passport-local').Strategy;
let prisma = require('../app').prisma;
let bcrypt = require('bcrypt');
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;

const initializePassport = (passport) => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.JWT_SECRET;
    const authenticateUser = async (username, password, done) => {
        const user = await prisma.Users.findFirst({where: { username: username }});
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

    }))
}