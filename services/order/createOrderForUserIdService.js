let Order = require('../../models/order.model');

module.exports = async (req, res) => {
    let { amount, paid, address, status, createBy } = req.body;
    amount = Number(amount);
    paid = Boolean(paid);
    const order = new Order({
        amount,
        paid,
        address,
        status,
        createBy
    })
    await order.save()
        .then((data) => { res.json({ message: 'Ваш заказ принят к обработке', orderId: data })})
        .catch(e => res.json({ message: e.message }));
}