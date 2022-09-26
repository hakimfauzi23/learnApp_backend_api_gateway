const express = require("express");
const router = express.Router();
const chaptersHandler = require("./handler/chapters");
const verifyRole = require("../middlewares/verifyRole");

router.get("/", chaptersHandler.getAll);
router.get("/:id", chaptersHandler.get);
router.post("/", verifyRole('admin'), chaptersHandler.create);
router.put("/:id", verifyRole('admin'), chaptersHandler.update);
router.delete("/:id", verifyRole('admin'), chaptersHandler.destroy);

module.exports = router;
