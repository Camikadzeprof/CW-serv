let mongoose = require('mongoose');
let autopopulate = require('mongoose-autopopulate');
let Schema = mongoose.Schema;

const cartSchema = new Schema({
        food: {
            type: Schema.Types.ObjectId,
            ref: 'Menu',
            required: true,
            autopopulate: true
        },
        amount: {
            type: Schema.Types.Number,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            autopopulate: true
        }
    },
    {
        timestamps: false
    })

cartSchema.plugin(autopopulate);

module.exports = mongoose.model('Cart', cartSchema);