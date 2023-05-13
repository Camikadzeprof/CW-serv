let Order = require('../../models/order.model');

module.exports = async (req, res) => {
    const { amount, payment, paid, address, status, createBy } = req.body;
    const order = new Order({
        amount,
        payment,
        paid,
        address,
        status,
        createBy
    })
    await order.save()
        .then(() => res.json({ message: 'Order was created successfully' }))
        .catch(e => res.json({ message: e.message }));
}