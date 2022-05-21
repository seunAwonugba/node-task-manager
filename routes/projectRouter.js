const express = require("express");
const router = express.Router();

//import controllers
const {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
    upsertTask,
} = require("../controllers/projectController");

router.get("/", getAllTasks);
router.get("/:id", getTaskById);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

router.put("/:id", upsertTask);
module.exports = { router };
