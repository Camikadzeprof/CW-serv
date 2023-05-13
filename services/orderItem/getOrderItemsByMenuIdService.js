let OrderItem = require('../../models/orderItem.model');

module.exports = async (req, res) => {
    const {menuId} = req.params;
    const orderItems = await OrderItem.find({createBy: menuId});
    res.json(orderItems);
}