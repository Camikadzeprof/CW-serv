let Order = require('../../models/order.model');

module.exports = async (req, res) => {
    const {orderId} = req.params;

    try {
        await Order.findById(orderId, (err, order) => {
            order.remove();
            res.json({message: `Заказ удален`});
        });
    } catch (e) {
        res.json({message: e.message});
    }
}