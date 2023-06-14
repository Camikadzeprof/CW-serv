let mongoose = require('mongoose');
let autopopulate = require('mongoose-autopopulate');
let Schema = mongoose.Schema;

const cartItemSchema = new Schema({
        food: {type: Schema.Types.ObjectId, ref: 'Menu', required: true, autopopulate: true},
        quantity: {type: Schema.Types.Number, required: true},
        amount: {type: Schema.Types.Number, required: true},
        cart: {type: Schema.Types.ObjectId, ref: 'Cart', required: true, autopopulate: true}
},
    {timestamps: false})

cartItemSchema.plugin(autopopulate);

module.exports = mongoose.model('CartItem', cartItemSchema);