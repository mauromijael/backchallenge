import mongoose from "mongoose";
const config = require("config");

mongoose.connect(config.app.mongodb.URI)
    .then(db => console.log("Db is connected"))
    .catch(err => console.log(err.message));