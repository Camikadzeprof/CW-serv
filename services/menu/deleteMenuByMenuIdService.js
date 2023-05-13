let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    const {menuId} = req.params;

    try {
        await Menu.findById(menuId, (err, menu) => {
            menu.remove();
            res.json({message: `Menu item was deleted successfully`});
        });
    } catch (e) {
        res.json({message: e.message});
    }
}