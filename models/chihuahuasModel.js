const mongoose = require("mongoose");

const ChihuahuasModel = mongoose.model(
    "chihuahua-api",
    {
        surname: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        personality: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now
        }
    },
    "chihuahuas"
);

module.exports = { ChihuahuasModel };