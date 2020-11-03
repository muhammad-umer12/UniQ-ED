const express = require("express");
const router = express.Router();

const student_controller = require("../Controllers/student.controller");


router.post('/',student_controller.student_create);
router.post('/login',student_controller.Login);
router.get('/',student_controller.getUsers);

module.exports = router;
