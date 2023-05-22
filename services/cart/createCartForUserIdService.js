let Cart = require('../../models/cart.model');
let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    let { food, amount, user } = req.body;
    amount = Number(amount);
    let foodf = await Menu.findById(food);
    let price = Number(foodf.price);
    let quantity = amount * price;
    const cart = new Cart({
        food,
        amount,
        quantity,
        user
    })
    await cart.save()
        .then(() => res.json({ message: 'Cart item was created successfully' }))
        .catch(e => res.json({ message: e.message }));
}