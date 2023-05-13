let Type = require('../../models/type.model')

module.exports = async (req, res) => {
    const { name } = req.params;
    const type = await Type.findOne({
        name: name
    })
    if (type === null) {
        return res.sendStatus(404);
    }
    res.json(type);
}