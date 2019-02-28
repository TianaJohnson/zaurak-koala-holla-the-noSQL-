const express = require('express');
const router = express.Router();

// this has to come before the databaseURL...
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
    // REPLACE THIS with mongoose find
    res.send([
        {
            _id: ObjectId("58de9673d0c1cb22fbcb2655"),
            name: "Scotty",
            gender: "M",
            age: 4,
            ready_to_transfer: true,
            notes: "Born in Guatemala"
        }
    ])
});

// POST route

router.post('/addkoala', (req, res) => {
    const kaolaToAdd = req.body;
    Koala.create(kaolaToAdd).then((createdKaola) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('there is an error in post', error);
        res.sendStatus(500);
    });
});


// PUT route


// DELETE route


module.exports = router;
