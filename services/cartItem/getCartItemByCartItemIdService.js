let CartItem = require('../../models/cartItem.model');

module.exports = async (req, res) => {
    const {cartItemId} = req.params;
    let cartItem = await CartItem.findById(cartItemId);
    if (cartItem !== null) {
        res.json(cartItem);
    } else {
        res.statusCode = 404;
        res.json({message: `Данного блюда нет в корзине`});
    }
}