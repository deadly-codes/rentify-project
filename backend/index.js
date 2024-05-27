const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/rentify', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB Schemas
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    role: String
});

const propertySchema = new mongoose.Schema({
    place: String,
    area: String,
    bedrooms: Number,
    bathrooms: Number,
    hospitals: String,
    colleges: String,
    sellerEmail: String
});

// Define MongoDB Models
const User = mongoose.model('User', userSchema);
const Property = mongoose.model('Property', propertySchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send('User registered successfully');
    });
});

app.post('/postProperty', (req, res) => {
    const property = new Property(req.body);
    property.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send('Property posted successfully');
    });
});

app.get('/properties', (req, res) => {
    Property.find({}, (err, properties) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(properties);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
