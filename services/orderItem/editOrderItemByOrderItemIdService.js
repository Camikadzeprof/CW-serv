let OrderItem = require('../../models/orderItem.model');
let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    const {orderItemId} = req.params;
    let {amount} = req.body;
    amount = Number(amount);
    let oi = await OrderItem.findById(orderItemId);
    let food = await Menu.findById(oi.food);
    let quantity = food.price * amount
    await OrderItem.updateOne({_id: orderItemId}, {
        $set: {
            amount,
            quantity
        }
    })
        .then(() => res.json({message: 'Элемент заказа обновлён успешно'}))
        .catch(err => res.json({message: err.message}));
}