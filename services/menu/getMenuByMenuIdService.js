const Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    const {menuId} = req.params;
    const menu = await Menu.findById(menuId);
    if (menu !== null) {
        res.json(menu);
    } else {
        res.json({message: `The menu item doesn't exist`});
    }
}