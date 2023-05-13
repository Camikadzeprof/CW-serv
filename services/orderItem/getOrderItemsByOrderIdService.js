let OrderItem = require('../../models/orderItem.model');

module.exports = async (req, res) => {
    const {orderId} = req.params;
    const orderItems = await OrderItem.find({
        order: orderId
    })
    res.json(orderItems);
}