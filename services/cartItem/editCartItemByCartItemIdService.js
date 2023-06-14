let CartItem = require('../../models/cartItem.model');
let Cart = require('../../models/cart.model');
let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    const {cartItemId} = req.params;
    let {quantity} = req.body;
    quantity = Number(quantity);
    let cartItem = await CartItem.findById(cartItemId);
    let food = await Menu.findById(cartItem.food);
    let amount = Number(food.price) * quantity;
    await CartItem.updateOne({_id: cartItemId}, {
        $set: {
            quantity,
            amount
        }
    })
        .then(async () => {
            let cart = await Cart.findById(cartItem.cart);
            await Cart.updateOne({_id: cartItem.cart}, {
                $set: {
                    amount: cart.amount - cartItem.amount + amount
                }
            })
            res.json({message: 'Информация о товаре в корзине обновлена'})
        })
        .catch(err => res.json({message: err.message}));
}