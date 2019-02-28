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
//Tiana
router.put('/updatekoala/:id', (req, res) => {
    //const updatedKoala = req.body
    Koala.findOneAndUpdate({_id: req.body._id}, req.body).then((updatedKoala) => {

        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in Put', error);
        res.sendStatus(500);
    });
});

// DELETE route
router.delete('/:id', (req, res) => {
    // {_id: req.params.id} is like WHERE id = req.params.id
    Koala.findOneAndRemove({ _id: req.params.id }).then((removedKoala) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    });
});

module.exports = router;
