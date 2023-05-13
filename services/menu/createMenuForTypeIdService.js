let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    let { name, type, img, description, price } = req.body;
    price = Number(price);
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