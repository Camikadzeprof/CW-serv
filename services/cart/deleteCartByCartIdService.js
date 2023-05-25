let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {cartId} = req.params;

    try {
        await Cart.findById(cartId, (err, cart) => {
            cart.remove();
            res.json({message: `Блюдо убрано из корзины`});
        });
    } catch (e) {
        res.json({message: e.message});
    }
}