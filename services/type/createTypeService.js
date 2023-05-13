const Type = require('../../models/type.model');

module.exports = async (req, res) => {
    const typeExists = await Type.findOne({
        name: req.body.name
    })
    if (typeExists !== null) {
        return res.status(409).json({ message: 'This type already exists' });
    }
    const type = new Type({
        name: req.body.name,
        createBy: req.body.userId
    })
    type.save().catch(e => {
        res.json({ message: e.message });
    })
    res.json({ message: 'Type was created successfully' });
}