let OrderItem = require('../../models/orderItem.model');

module.exports = async (req, res) => {
    const {orderItemId} = req.params;

    try {
        await OrderItem.findById(orderItemId, (err, orderItem) => {
            orderItem.remove();
            res.json({message: `Элемент заказа удален успешно`});
        });
    } catch (e) {
        res.json({message: e.message});
    }
}