let CartItem = require('../../models/cartItem.model');
let Cart = require('../../models/cart.model');
let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    let { food, quantity, cart } = req.body;
    quantity = Number(quantity);
    let foodf = await Menu.findById(food);
    let price = Number(foodf.price);
    let amount = quantity * price;
    const cartItem = new CartItem({
        food,
        quantity,
        amount,
        cart
    })
    await cartItem.save()
        .then(async () => {
            let cr = await Cart.findById(cart);
            await Cart.updateOne({_id: cart}, {
                $set: {
                    amount: cr.amount + amount
                }
            })
            res.json({ message: 'Блюдо добавлено в корзину' })
        })
        .catch(e => res.json({ message: e.message }));
}