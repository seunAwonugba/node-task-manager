const { TaskModel } = require("../models/model");
//import my created async middleware

const { asyncWrapper } = require("../middleware/async");

//the essence of the async wrapper is just to abstract our async functions in our controller, since every controller uses it
//lets just abstract it then and have it in just one place and keep call it wherever

//dont forget the async wrapper is a function , and it also takes an argument, the argument is the entire async function in the controller

const getAllTasks = asyncWrapper(async (req, res) => {
    // try {
    const allDataToFetch = await TaskModel.find();
    res.status(200).json({
        success: true,
        data: allDataToFetch,
    });

    //my async middle ware is already handling the error
    // } catch (err) {
    // res.status(500).json({
    //     success: false,
    //     data: `Internal server error occured: Unable to fetch all data from the db, caused by : ${err.message}`,
    // });
    // }
});

const createTask = asyncWrapper(async (req, res) => {
    //for testing our middleware purposes
    // console.log(req.body);
    // try {
    const taskToCreate = await TaskModel.create(req.body);
    res.status(201).json({
        success: true,
        data: taskToCreate,
    });
    // } catch (err) {
    //     res.status(500).json({
    //         success: false,
    //         data: `Internal server error occured: Unable to create task at this time, caused by : ${err.message} `,
    //     });
    // }
});

const getTaskById = asyncWrapper(async (req, res) => {
    // try {
    const taskId = req.params.id;
    const taskToFetchById = await TaskModel.findById(taskId);

    // there are times the wrong id will be passed, and data will return null
    //so just to handle such cases, do

    if (!taskToFetchById) {
        res.status(404).json({
            success: false,
            data: "id cannot be found in our server",
        });
        return;
    }
    res.status(200).json({
        success: true,
        data: taskToFetchById,
    });
    // } catch (err) {
    //     res.status(500).json({
    //         success: false,
    //         data: `Internal server error occured: Unable to fetch this particular task, caused by : ${err.message} `,
    //     });
    // }
});

const updateTask = asyncWrapper(async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const options = {
        new: true,
        runValidators: true,
    };

    // try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
        id,
        body,
        options
        // (err) => {
        //     `An error occured : Unable to update task; caused by ${err.message}`;
        // }
    );

    if (!updatedTask) {
        res.status(404).json({
            success: false,
            data: `An error occured: This task does not exist in our database`,
        });
        return;
    } else {
        res.status(200).json({
            success: true,
            data: updatedTask,
        });
        return;
    }
    // } catch (err) {
    //     res.status(500).json({
    //         success: false,
    //         data: `An error occured : Unable to update task; caused by ${err.message}`,
    //     });
    // }
});

const deleteTask = asyncWrapper(async (req, res) => {
    // try {
    const id = req.params.id;
    const idToDelete = await TaskModel.findByIdAndDelete(id);

    if (!idToDelete) {
        res.status(404).json({
            success: true,
            data: `This data cannot be found in our server`,
        });
        return;
    } else {
        res.status(200).json({
            success: true,
            data: `${idToDelete.name} has been deleted successfully`,
        });
    }
    // } catch (err) {
    //     res.status(500).json({
    //         success: false,
    //         data: `Internal server error occured. Unable to delete data caused by : ${err.message}`,
    //     });
    // }
});

const upsertTask = asyncWrapper(async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const options = {
        new: true,
        runValidators: true,
        overwrite: true,
    };

    // try {
    const upsertedTask = await TaskModel.findByIdAndUpdate(id, body, options);
    if (!upsertedTask) {
        res.status(404).json({
            success: false,
            data: `This data cannot be found in our server`,
        });
        return;
    } else {
        res.status(200).json({
            success: true,
            data: upsertedTask,
        });
    }
    // } catch (err) {
    //     res.status(500).json({
    //         success: false,
    //         data: `Internal server error occured. Unable to delete data caused by : ${err.message}`,
    //     });
    // }
});

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
    upsertTask,
};
