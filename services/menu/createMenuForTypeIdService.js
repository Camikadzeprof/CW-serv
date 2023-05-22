let Menu = require('../../models/menu.model');
let Type = require('../../models/type.model');

module.exports = async (req, res) => {
    let { name, type, img, description, price } = req.body;
    price = Number(price);
    type = await Type.findOne({name: type});
    type = type._id;
    const menu = new Menu({
        name,
        type,
        img,
        description,
        price
    })
    await menu.save()
        .then(() => res.json({ message: 'Menu item was created successfully' }))
        .catch(e => res.json({ message: e.message }));
}