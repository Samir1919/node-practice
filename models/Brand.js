const mongoose = require('mongoose');
var mongooseI18n = require('mongoose-i18n-localize');
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32,
        unique: true,
        i18n: true
    },
    logo: {
        type: String,
    },
    banner: {
        type: String,
    },
    is_published: {
        type: Boolean,
        defaultStatus: false
    },
    is_requested: {
        type: Boolean,
        defaultStatus: false
    }
}, {
    timestamps: true
});

BrandSchema.plugin(mongooseI18n, {
    locales: ['en', 'bn']
});

module.exports = mongoose.model('Brand', BrandSchema)