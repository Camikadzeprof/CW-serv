let mongoose = require('mongoose');
let autopopulate = require('mongoose-autopopulate')
let Schema = mongoose.Schema;
let OrderItem = require('./orderItem.model');

const orderSchema = new Schema({
    amount: {type: Schema.Types.Number, required: true},
    paid: {type: Schema.Types.Boolean, required: true},
    address: {type: String, required: true},
    status: {type: String, required: true},
    courier: {type: Schema.Types.ObjectId, ref: 'User', required: false, autopopulate: true},
    createBy: {type: Schema.Types.ObjectId, ref: 'User', required: true, autopopulate: true}
},
    {timestamps: true})

orderSchema.pre('remove', async function (next) {
    await OrderItem.deleteMany({order: this._id});
    next();
})

orderSchema.plugin(autopopulate);

module.exports = mongoose.model('Order', orderSchema);