let Order = require('../../models/order.model');

module.exports = async (req, res) => {
    const {orderId} = req.params;
    let {paid, address, status, courier} = req.body;
    paid = Boolean(paid);
    await Order.updateOne({_id: orderId}, {
        $set: {
            paid,
            address,
            status,
            courier
        }
    })
        .then(() => res.json({message: 'Заказ обновлен'}))
        .catch(err => res.json({message: err.message}));
}