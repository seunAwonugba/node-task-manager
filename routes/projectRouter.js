const express = require("express");
const router = express.Router();

//import controllers
const {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
} = require("../controllers/projectController");

router.get("/", getAllTasks);
router.get("/:id", getTaskById);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = { router };
