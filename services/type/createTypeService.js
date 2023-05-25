const Type = require('../../models/type.model');

module.exports = async (req, res) => {
    const typeExists = await Type.findOne({
        name: req.body.name
    })
    if (typeExists !== null) {
        res.status(409).json({ message: 'Такой тип блюд уже существует' });
    }
    else {
        const type = new Type({
            name: req.body.name,
            createBy: req.body.userId
        })
        type.save().catch(e => {
            res.json({message: e.message});
        })
        res.json({message: 'Тип успешно добавлен'});
    }
}