const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    Brand: String,
    DeviceWorth: Number
});

module.exports = mongoose.model('products', productSchema);