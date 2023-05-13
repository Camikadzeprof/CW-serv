let Type = require('../../models/type.model');

module.exports = async (req, res) => {
    const types = await Type.find({});
    types !== null ? res.json(types) : res.sendStatus(500);
}