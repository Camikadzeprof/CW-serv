let Type = require('../../models/type.model');

module.exports = async (req, res) => {
    const types = await Type.find({});
    res.json(types);
}