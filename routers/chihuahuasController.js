const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { ChihuahuasModel } = require('../models/chihuahuasModel');

router.get('/', (req, res) => {
    ChihuahuasModel.find((err, docs) => {
        if (!err) {
            res.json(docs);
        }
        else {
            console.log("Error to get data: " + err);
        }
    })
});

router.post('/', (req, res) => {
    const newChihuahua = new ChihuahuasModel({
        surname: req.body.surname,
        age: req.body.age,
        personality: req.body.personality,
        color: req.body.color,
        created_at: req.body.created_at
    });

    newChihuahua.save((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else console.log('Error creating new Chiwawa : ' + err);
    })
});

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).json({ status: 400, message: "unknow id " + req.params.id })
    };

    const updateChihuahua = {
        surname: req.body.surname,
        age: req.body.age,
        personality: req.body.personality,
        color: req.body.color,
    };

    ChihuahuasModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateChihuahua },
        { new: true },
        (err, docs) => {
            if (!err) {
                res.send(docs);
            }
            else {
                console.log("Update error : " + err);
            }
        }
    );
});

router.delete("/:id", (req, res) => {

    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).json({ status: 400, message: "unknow id " + req.params.id })
    }

    ChihuahuasModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) {
                res.send(docs);
            }
            else {
                console.log('Delete error :' + err);
            }
        }
    );
});

module.exports = router