let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    const menu = await Menu.find();
    res.json(menu);
}