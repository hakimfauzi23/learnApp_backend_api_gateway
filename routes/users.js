const express = require("express");
const router = express.Router();
const usersHandler = require("./handler/users");
const verifyToken = require("../middlewares/verifyToken");
const verifyRole = require("../middlewares/verifyRole");

router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.put("/", verifyToken, usersHandler.update);
router.get("/get-user-profile", verifyToken, usersHandler.getUserProfile);
router.get("/", verifyToken, verifyRole("admin"), usersHandler.getUsers);
router.get("/:id", usersHandler.getUser);
router.post("/logout", verifyToken, usersHandler.logout);

module.exports = router;
