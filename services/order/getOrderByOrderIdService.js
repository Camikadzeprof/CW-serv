let Order = require('../../models/order.model');

module.exports = async (req, res) => {
    const {orderId} = req.params;
    const order = await Order.findById(orderId);
    if (order !== null) {
        res.json(order);
    } else {
        res.json({message: `Данного заказа не существует`});
    }
}