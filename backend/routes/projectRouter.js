const express = require('express');
const {createProject , getProjects , getProjectById ,updateProject} = require('../controllers/projectController');
const router = express.Router();

const isLogged = require("../middlewares/isLoggedin");

router.get('/create', isLogged, createProject);
router.get('/edit', isLogged, updateProject);
router.get('/view', isLogged, getProjects);

module.exports = router;