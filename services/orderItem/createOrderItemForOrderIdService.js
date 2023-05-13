let OrderItem = require('../../models/orderItem.model');

module.exports = async (req, res) => {
    const { food, amount, order } = req.body;
    const orderItem = new OrderItem({
        food,
        amount,
        order
    })
    await orderItem.save()
        .then(() => res.json({ message: 'Order item was created successfully' }))
        .catch(e => res.json({ message: e.message }));
}