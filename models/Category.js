const mongoose = require('mongoose');
var mongooseI18n = require('mongoose-i18n-localize');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32,
        unique: true,
        i18n: true
    }
}, {
    timestamps: true
});

CategorySchema.plugin(mongooseI18n, {
    locales: ['en', 'bn']
});

module.exports = mongoose.model('Category', CategorySchema)