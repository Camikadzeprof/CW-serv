let mongoose = require('mongoose');
let autopopulate = require('mongoose-autopopulate');
let Schema = mongoose.Schema;

const orderItemSchema = new Schema({
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
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
        autopopulate: true
    }
},
    {
        timestamps: false
    })

orderItemSchema.plugin(autopopulate);

module.exports = mongoose.model('OrderItem', orderItemSchema);