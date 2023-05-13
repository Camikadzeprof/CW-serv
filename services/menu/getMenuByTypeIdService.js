let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    const {typeId} = req.params;
    const menu = await Menu.find({
        type: typeId
    })
    res.json(menu);
}