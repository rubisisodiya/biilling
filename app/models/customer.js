const mongoose = require('mongoose')
// const mongoose_delete = require('mongoose-delete')

//const isEmail = require('validator/lib/isEmail')
//const isNumeric = require('validator/lib/isNumeric')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
}, { timestamps: true })

// customerSchema.plugin(mongoose_delete)

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer