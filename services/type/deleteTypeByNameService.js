let Type = require('../../models/type.model')

module.exports = async (req, res) => {
    const {typeName} = req.params;

    try {
        await Type.findOne({name: typeName}, (err, type) => {
            type.remove();
            res.json({message: `Type was deleted successfully`});
        });
    } catch (e) {
        res.json({message: e.message});
    }
}