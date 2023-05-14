let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {cartId} = req.params;
    const cart = await Cart.findById(cartId);
    if (cart !== null) {
        res.json(cart);
    } else {
        res.json({message: `The cart item doesn't exist`});
    }
}