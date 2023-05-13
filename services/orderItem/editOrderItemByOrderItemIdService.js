let OrderItem = require('../../models/orderItem.model');

module.exports = async (req, res) => {
    const {orderItemId} = req.params;
    const {amount} = req.body;
    await OrderItem.updateOne({_id: orderItemId}, {
        $set: {
            amount
        }
    })
        .then(() => res.json({message: 'Order item updated successfully'}))
        .catch(err => res.json({message: err.message}));
}