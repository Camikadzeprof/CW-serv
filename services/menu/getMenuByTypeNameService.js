let Menu = require('../../models/menu.model');
let Type = require('../../models/type.model');

module.exports = async (req, res) => {
    let {typeId} = req.params;
    let type = await Type.findOne({name: typeId});
    typeId = type.name;
    const menu = await Menu.find({
        type: type.id
    });
    menu.type = typeId;
    res.json(menu);
}