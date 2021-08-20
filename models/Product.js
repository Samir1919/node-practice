const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 200
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Product", productSchema)