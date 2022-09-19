const express = require("express");
const router = express.Router();
const chaptersHandler = require("./handler/chapters");
const verifyRole = require("../middlewares/verifyRole");

router.get("/", chaptersHandler.getAll);
router.get("/:id", chaptersHandler.get);
router.post("/", verifyRole, chaptersHandler.create);
router.put("/:id", verifyRole, chaptersHandler.update);
router.delete("/:id", verifyRole, chaptersHandler.destroy);

module.exports = router;
