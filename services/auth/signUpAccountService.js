let User = require('../../models/user.model');

module.exports = async (req, res) => {
    const userExists = await User.findOne({
        username: req.body.username
    })
    if (userExists !== null) {
        res.status(409).json({ message: 'Пользователь с указанным именем уже существует' });
    }
    else {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            role: 'user'
        })
        user.save()
            .then(() => res.json({message: 'Регистрация прошла успешно'}))
            .catch(e => res.json({message: e.message}));
    }
}