let CartItem = require('../../models/cartItem.model');
let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {cartItemId} = req.params;

    try {
        await CartItem.findById(cartItemId, async (err, cartItem) => {
            let cart = await Cart.findById(cartItem.cart);
            await Cart.updateOne({_id: cartItem.cart}, {
                $set: {
                    amount: cart.amount - cartItem.amount
                }
            })
            cartItem.remove();
            res.json({message: `Блюдо убрано из корзины`});
        });
    } catch (e) {
        res.json({message: e.message});
    }
}