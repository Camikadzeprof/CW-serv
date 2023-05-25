const Menu = require('../../models/menu.model');
const Type = require('../../models/type.model');

module.exports = async (req, res) => {
    const {menuId} = req.params;
    let menu = await Menu.findById(menuId);
    if (menu !== null) {
        res.json(menu);
    } else {
        res.json({message: `Указанного блюда не существует`});
    }
}