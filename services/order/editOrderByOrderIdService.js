let Order = require('../../models/order.model');

module.exports = async (req, res) => {
    const {orderId} = req.params;
    const {amount, paid, status} = req.body;
    await Order.updateOne({_id: orderId}, {
        $set: {
            amount,
            paid,
            status
        }
    })
        .then(() => res.json({message: 'Order updated successfully'}))
        .catch(err => res.json({message: err.message}));
}