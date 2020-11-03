const express = require("express");
const router = express.Router();

const student_controller = require("../Controllers/admin.controller");


router.post('/',student_controller.student_create);
router.post('/login',student_controller.Login);

module.exports = router;
