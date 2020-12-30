import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    user: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true,
    versionKey: false
})

export default model( 'Product', productSchema );