let Type = require('../../models/type.model')

module.exports = async (req, res) => {
    const {typeId} = req.params;
    const {name} = req.body;

    await Type.updateOne({_id: typeId}, {
        $set: {
            name
        }
    })
        .then(() => res.json({message: 'Type updated successfully'}))
        .catch(err => res.json({message: err.message}));
}