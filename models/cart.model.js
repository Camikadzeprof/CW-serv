let mongoose = require('mongoose');
let autopopulate = require('mongoose-autopopulate');
const CartItem = require("./cartItem.model");
let Schema = mongoose.Schema;

const cartSchema = new Schema({
        amount: {type: Schema.Types.Number, required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true, autopopulate: true}
},
    {timestamps: false})

cartSchema.plugin(autopopulate);

cartSchema.pre('remove', async function (next) {
    await CartItem.deleteMany({cart: this._id});
    next();
})

module.exports = mongoose.model('Cart', cartSchema);