let OrderItem = require('../../models/orderItem.model');
let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    let { food, amount, order } = req.body;
    amount = Number(amount);
    food = await Menu.findById(food);
    let quantity = food.price * amount;
    const orderItem = new OrderItem({
        food,
        amount,
        quantity,
        order
    })
    await orderItem.save()
        .then(() => res.json({ message: 'Элемент заказа добавлен' }))
        .catch(e => res.json({ message: e.message }));
}