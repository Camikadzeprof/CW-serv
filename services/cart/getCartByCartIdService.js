let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {cartId} = req.params;
    let cart = await Cart.findById(cartId);
    if (cart !== null) {
        res.json(cart);
    } else {
        res.statusCode = 404;
        res.json({message: `Данного блюда нет в корзине`});
    }
}