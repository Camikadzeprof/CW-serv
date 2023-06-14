let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let OrderItem = require('./orderItem.model');
let CartItem = require('./cartItem.model');

const menuSchema = new Schema({
    name: {type: String, required: true},
    type: {type: Schema.Types.ObjectId, ref: 'Type', required: true},
    img: {type: String, required: true},
    description: {type: String, required: false},
    price: {type: Schema.Types.Number, required: true}
},
    {timestamps: false})

menuSchema.pre('remove', async function (next) {
    await OrderItem.deleteMany({food: this._id});
    await CartItem.deleteMany({food: this._id});
    next();
})

module.exports = mongoose.model('Menu', menuSchema);