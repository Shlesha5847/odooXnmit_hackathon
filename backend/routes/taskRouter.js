const express = require('express');
const { createTask, editTask, viewTask } = require('../controllers/taskController');
const router = express.Router();

const isLogged = require("../middlewares/isLoggedin");

router.post('/create', isLogged, createTask);
router.put('/edit/:id', isLogged, editTask);
router.get('/view', isLogged, viewTask);
router.delete("/:id", isLogged, deleteTask);

module.exports = router;