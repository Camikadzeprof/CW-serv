let User = require('../../models/user.model');

module.exports = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    if (user !== null) {
        const {email, phone, role} = user;
        const data = {
            email,
            phone,
            role
        }
        return res.json(data);
    } else {
        return res.json({message: 'Указанного пользователя не существует'});
    }

}