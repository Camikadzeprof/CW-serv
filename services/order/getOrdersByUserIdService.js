const Order = require('../../models/order.model');

module.exports = async (req, res) => {
    const {userId} = req.params;
    const orders = await Order.find({createBy: userId});
    res.json(orders);
}