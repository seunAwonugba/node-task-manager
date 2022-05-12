const getAllTasks = (req, res) => {
    res.status(200).json({
        success: true,
        data: "get all tasks",
    });
};

const createTask = (req, res) => {
    //for testing our middleware purposes
    console.log(req.body);
    res.status(201).json({
        success: true,
        data: "create tasks",
    });
};

const getTaskById = (req, res) => {
    //for testing purposes
    console.log(req.params);
    res.status(200).json({
        success: true,
        data: "get task by ID",
    });
};

const updateTask = (req, res) => {
    //to test
    console.log(req.body);
    console.log(req.params);

    res.status(201).json({
        success: true,
        data: "update task",
    });
};

const deleteTask = (req, res) => {
    //to test
    console.log(req.params);

    res.status(200).json({
        success: true,
        data: "delete task",
    });
};

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
};
