let Cart = require('../../models/cart.model');
let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    const {cartId} = req.params;
    let {amount} = req.body;
    amount = Number(amount);
    let cart = await Cart.findById(cartId);
    let food = await Menu.findById(cart.food);
    let quantity = Number(food.price) * amount;
    await Cart.updateOne({_id: cartId}, {
        $set: {
            amount,
            quantity
        }
    })
        .then(() => res.json({message: 'Cart item updated successfully'}))
        .catch(err => res.json({message: err.message}));
}