let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Menu = require('./menu.model');

const typeSchema = new Schema({
    name: {
        type: String,
        required: true
    }
},
    {
        timestamps: false
    })

typeSchema.pre('remove', async function (next) {
    await Menu.deleteMany({type: this._id});
    next();
})

module.exports = mongoose.model('Type', typeSchema);