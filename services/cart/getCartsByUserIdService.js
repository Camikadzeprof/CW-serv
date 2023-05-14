let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {userId} = req.params;
    const cart = await Cart.find({
        user: userId
    })
    res.json(cart);
}