let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {cartId} = req.params;

    try {
        await Cart.findById(cartId, (err, cart) => {
            cart.remove();
            res.json({message: `Cart item was deleted successfully`});
        });
    } catch (e) {
        res.json({message: e.message});
    }
}