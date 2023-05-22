let Cart = require('../../models/cart.model');

module.exports = async (req, res) => {
    const {userId} = req.params;

    try {
        await Cart.deleteMany({user: userId});
        res.json({message: 'Козина очищена'});
    } catch (e) {
        res.json({message: e.message});
    }
}