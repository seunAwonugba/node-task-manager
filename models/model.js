const mongoose = require("mongoose");

//set up destructure for all the documents in your connection
const schema = new mongoose.Schema({
    //this is simply implementing validation, so that users dont omit the name property, thats why its set to requried true
    //and it also comes with a backend handling the error message
    name: {
        required: [true, "Name must be provided"],
        trim: true,
        maxlength: [20, "Name cannot be more than 20 characters"],
        type: String,
    },
    completed: {
        default: false,
        type: Boolean,
    },
});

const TaskModel = mongoose.model("TaskModel", schema);

module.exports = { TaskModel };
