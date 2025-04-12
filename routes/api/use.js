const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/api/use_controller");

router.get("/", UserController.getUsers); // Lấy danh sách người dùng

module.exports = router;