const Order = require('../../models/order.model');

module.exports = async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
}