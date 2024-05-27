// models/Property.js

// Sample model for a property

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    // Add more fields as needed
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
