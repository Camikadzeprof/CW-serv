let OrderItem = require('../../models/orderItem.model');

module.exports = async (req, res) => {
    const {orderItemId} = req.params;

    try {
        await OrderItem.findById(orderItemId, (err, orderItem) => {
            orderItem.remove();
            res.json({message: `Order item was deleted successfully`});
        });
    } catch (e) {
        res.json({message: e.message});
    }
}