let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {userId} = req.params;
    const cart = await Cart.findOne({
        user: userId
    })
    if (cart != null)
        res.json(cart);
    else
        res.json({_id: '', amount: null, user: ''});
}