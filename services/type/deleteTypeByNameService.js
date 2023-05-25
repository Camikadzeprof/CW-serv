let Type = require('../../models/type.model')

module.exports = async (req, res) => {
    const {typeName} = req.params;

    try {
        await Type.findOne({name: typeName}, (err, type) => {
            type.remove();
            res.json({message: `Тип удален успешно`});
        });
    } catch (e) {
        res.json({message: e.message});
    }
}