let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let Schema = mongoose.Schema;
let Order = require('./order.model')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
},
    {
        timestamps: false
    })

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    user.password = await bcrypt.hash(user.password, 10);
    next();
})
userSchema.pre('remove', async function (next) {
    await Order.remove({createBy: {
            $in: this._id
        }});
    next();
})

module.exports = mongoose.model('User', userSchema);