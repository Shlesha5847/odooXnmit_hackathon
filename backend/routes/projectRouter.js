const express = require('express');
const {createProject , getProjects , getProjectById ,updateProject} = require('../controllers/projectController');
const router = express.Router();

const isLogged = require("../middlewares/isLoggedin");

router.post('/create', isLogged, createProject);
router.put('/edit/:id', isLogged, updateProject);
router.get('/view', isLogged, getProjects);
router.get('/view/:id',isLogged,getProjectById);

module.exports = router;