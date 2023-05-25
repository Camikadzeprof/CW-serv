let Type = require('../../models/type.model')

module.exports = async (req, res) => {
    const {typeId} = req.params;
    const {name} = req.body;
    const typeExists = await Type.findOne({name: name});

    if (typeExists != null) {
        res.status(409).json({message: 'Тип с указанным названием уже существует'});
    }
    else {
        await Type.updateOne({_id: typeId}, {
            $set: {
                name: name
            }
        })
            .then(() => res.json({message: 'Тип обновлен успешно'}))
            .catch(err => res.json({message: err.message}));
    }
}