//import mongoose
const mongoose = require("mongoose");
require("dotenv").config();

//remember to add your password and rename your db

const connectionString = process.env.MONGO_URL;

mongoose.connect(connectionString).then(
    () => {
        console.log("Database connected successfully...");
    },
    (err) => {
        console.log(
            `An error occured : Connection to the Database could not be established, it was caused by ${err.message}`
        );
    }
);

//lastly require your DB in app.js, you dont have to import it
