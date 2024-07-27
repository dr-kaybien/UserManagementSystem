const express = require('express');
const router = express.Router();
const UserController = require("../controller/user.controller");

router.post("/register", UserController.signup);
router.put("/update/:id", UserController.update);
router.get("/users", UserController.fetchAllUsers);
router.get("/userById/:id", UserController.fetchUserById);
router.delete("/userById/:id", UserController.deleteUser)

module.exports = router;    