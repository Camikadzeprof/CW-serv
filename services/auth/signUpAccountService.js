let User = require('../../models/user.model');

module.exports = async (req, res) => {
    const userExists = await User.findOne({
        username: req.body.username
    })
    if (userExists !== null) {
        return res.status(409).json({ message: 'This user already exists' });
    }
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        role: 'user'
    })
    user.save()
        .then(() => res.json({message: 'Sign up success'}))
        .catch(e => res.json({message: e.message}));
    
}