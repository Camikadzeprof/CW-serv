let User = require('../../models/user.model');

module.exports = async (req, res) => {
    const {id} = req.params;

    try {
        await User.deleteOne({_id: id}).then(result => {
            res.json({message: `Пользователь удален успешно`});
        })
    } catch (e) {
        res.json({message: e.message});
    }
}