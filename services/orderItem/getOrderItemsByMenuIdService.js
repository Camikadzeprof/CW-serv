let OrderItem = require('../../models/orderItem.model');

module.exports = async (req, res) => {
    const {menuId} = req.params;
    const orderItems = await OrderItem.find({food: menuId});
    res.json(orderItems);
}