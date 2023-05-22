const Order = require('../../models/order.model');

module.exports = async (req, res) => {
    const {status} = req.params;
    const orders = await Order.find({status: status});
    res.json(orders);
}