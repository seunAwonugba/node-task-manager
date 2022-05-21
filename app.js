require("./db/connect");
const express = require("express");
const app = express();
const port = 3000;
const host = "localhost";

//since we will be dealing with json data, because the get request comes in json data, and i will also need to make post request in json data
//  import express middle ware to handle that 1.

app.use(express.json());
//without this middle ware, you wont have any data in req.body

//import router 2.
const { router } = require("./routes/projectRouter");

//use the router 3.
app.use("/api/v1/tasks", router);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the home page");
});

app.all("*", (req, res) => {
    res.status(400).send("Resource not found");
});

app.listen(port, host, () => {
    console.log(`Server is listening on port: http://${host}:${port}`);
});

//you import express in routes and app.js
//you import controllers in routes
//you import routes in app.js
