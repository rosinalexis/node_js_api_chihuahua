const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/chihuahua-api",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log("Mongodb connection ok.");
        }
        else {
            console.log('Connection error: ' + err);
        }
    }
)