let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {cartId} = req.params;
    const {amount} = req.body;
    await Cart.updateOne({_id: cartId}, {
        $set: {
            amount
        }
    })
        .then(() => res.json({message: 'Cart item updated successfully'}))
        .catch(err => res.json({message: err.message}));
}