let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let OrderItem = require('./orderItem.model');

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Schema.Types.Number,
        required: true
    }
},
    {
        timestamps: false
    })

menuSchema.pre('remove', async function (next) {
    await OrderItem.remove({food: {
            $in: this._id
        }});
    next();
})

module.exports = mongoose.model('Menu', menuSchema);