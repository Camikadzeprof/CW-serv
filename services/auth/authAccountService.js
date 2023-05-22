let jwt = require('jsonwebtoken');

module.exports = (user) => {
    console.log(user);
    const token = jwt.sign(user, 'secret', {
            expiresIn: 3600 * 24
        }
    )
    return new Object({
        user: {
            id: user.id,
            username: user.username,
            role: user.role
        },
        token: token,
        success: true
    });
}