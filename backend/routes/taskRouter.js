const express = require('express');
const {createTask , editTask, viewTask} = require('../controllers/taskController');
const router = express.Router();

const isLogged = require("../middlewares/isLoggedin");

router.get('/create', isLogged, createTask);
router.get('/edit', isLogged, editTask);
router.get('/view', isLogged, viewTask);

module.exports = router;