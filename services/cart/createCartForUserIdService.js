let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const { food, amount, user } = req.body;
    const cart = new Cart({
        food,
        amount,
        user
    })
    await cart.save()
        .then(() => res.json({ message: 'Cart item was created successfully' }))
        .catch(e => res.json({ message: e.message }));
}