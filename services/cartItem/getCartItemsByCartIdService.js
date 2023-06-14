let CartItem = require('../../models/cartItem.model');

module.exports = async (req, res) => {
    const {cartId} = req.params;
    const cartItem = await CartItem.find({
        cart: cartId
    })
    res.json(cartItem);
}