const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/koalaholla';
mongoose.connect(databaseUrl, { useNewUrlParser: true });

mongoose.connection.once('connected', () => {
    console.log('mongoose connected to:', databaseUrl);
});

mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error: ', err);
});

// Schema goes here
const Schema = mongoose.Schema;
const koalaSchema = new Schema({
    // _id is added by default
    name: { type: String },
    gender: { type: String },
    age: { type: Number },
    ready_to_transfer: { type: Boolean },
    notes: { type: String }
});

const Koala = mongoose.model('Koala', koalaSchema);
// GET Route
router.get('/', (req, res) => {
    Koala.find({}).then(results => {
        res.send(results);
    }).catch(error => {
        console.log('there was a problem with GET', error);
        res.sendStatus(500);
    })
});

// POST route


// PUT route


// DELETE route


module.exports = router;
