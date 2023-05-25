let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    const {menuId} = req.params;
    let {img, description, price} = req.body;
    price = Number(price);
    await Menu.updateOne({_id: menuId}, {
        $set: {
            img,
            description,
            price
        }
    })
        .then(() => res.json({message: 'Блюдо изменено успешно'}))
        .catch(err => res.json({message: err.message}));
}