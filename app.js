require("./db/connect");
const express = require("express");
//import router

const { router } = require("./routes/projectRouter");
const { notExistInDb } = require("./middleware/notExistInDb");
const { errorHandlerMiddleware } = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 3000;
const host = "localhost";

//serve the static files
app.use(express.static("./public"));
//since we will be dealing with json data, because the get request comes in json data, and i will also need to make post request in json data
//  import express middle ware to handle that 1.
app.use(express.json());
//without this middle ware, you wont have any data in req.body

//use the router 3.
app.use("/api/v1/tasks", router);

// our own 404 error, using express middleware
// app.use(notExistInDb);

//using async error handler
app.use(errorHandlerMiddleware);

// express custom 404 error
// app.all("*", (req, res) => {
//     res.status(400).send("Resource not found");
// });

app.listen(port, host, () => {
    console.log(`Server is listening on port: http://${host}:${port}`);
});

//you import express in routes and app.js
//you import controllers in routes
//you import routes in app.js
