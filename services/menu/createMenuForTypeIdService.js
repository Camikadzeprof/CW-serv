let Menu = require('../../models/menu.model');
let Type = require('../../models/type.model');

module.exports = async (req, res) => {
    let { name, type, img, description, price } = req.body;
    price = Number(price);
    type = await Type.findOne({name: type});
    if (type) {
        type = type._id;
        const menuExists = await Menu.findOne({name: name, type: type});
        if (menuExists != null) {
            res.status(409).json({message: 'Такое блюдо уже существует'});
        } else {
            const menu = new Menu({name, type, img, description, price})
            await menu.save()
                .then(() => res.json({message: 'Блюдо добавлено в меню'}))
                .catch(e => res.json({message: e.message}));
        }
    }
    else res.status(404).json({message: 'Введите существующий тип'});
}