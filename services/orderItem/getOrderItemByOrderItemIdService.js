let OrderItem = require('../../models/orderItem.model');

module.exports = async (req, res) => {
    const {orderItemId} = req.params;
    const orderItem = await OrderItem.findById(orderItemId);
    if (orderItem !== null) {
        res.json(orderItem);
    } else {
        res.json({message: `The order item doesn't exist`});
    }
}