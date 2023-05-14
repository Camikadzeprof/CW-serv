let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {menuId} = req.params;
    const cart = await Cart.find({food: menuId});
    res.json(cart);
}