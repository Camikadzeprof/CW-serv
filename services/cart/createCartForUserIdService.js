let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    let { amount, user } = req.body;
    amount = Number(amount);
    let crt = await Cart.findOne({user: user});
    if (crt == null) {
        const cart = new Cart({
            amount,
            user
        })
        await cart.save()
            .then((data) => res.json({message: 'Блюдо добавлено в корзину', cartId: data}))
            .catch(e => res.json({message: e.message}));
    }
    else {
        res.json({message: 'Блюдо добавлено в корзину', cartId: crt._id})
    }
}