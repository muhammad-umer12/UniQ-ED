const express = require("express");
const router = express.Router();

const qr_controller = require("../Controllers/physics.controller");


router.post('/',qr_controller.addEnglishChapter);
router.get('/',qr_controller.getAllChapters)

module.exports = router;
