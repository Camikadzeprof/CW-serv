let User = require('../../models/user.model');

module.exports = async (req, res) => {
    const { id } = req.params;
    const { email, phone } = req.body;
    console.log(req.body);
    await User.updateOne({_id: id}, {
        $set: {
            email,
            phone
        }
    })
        .then(() => res.json({message: 'Информация о пользователе обновлена'}))
        .catch(e => res.json({message: e.message}))
}