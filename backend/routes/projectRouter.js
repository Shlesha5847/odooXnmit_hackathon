const express = require('express');
const {createProject , editProject, viewProject} = require('../controllers/projectController');
const router = express.Router();

const isLogged = require("./middlewares/isLoggedin");

router.get('/create', isLogged, createProject);
router.get('/edit', isLogged, editProject);
router.get('/view', isLogged, viewProject);

module.exports = router;