let Menu = require('../../models/menu.model');

module.exports = async (req, res) => {
    const {menuId} = req.params;
    let {name, img, description, price} = req.body;
    price = Number(price);
    let menu = await Menu.findById(menuId);
    if (menu.name !== name) {
        menu = await Menu.findOne({name: name});
        if (!menu) {
            await Menu.updateOne({_id: menuId}, {
                $set: {
                    name,
                    img,
                    description,
                    price
                }
            })
                .then(() => res.json({message: 'Блюдо изменено успешно'}))
                .catch(err => res.json({message: err.message}));
        }
        else res.status(409).json({message: 'Блюдо с таким названием уже существует'});
    }
    else {
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
}