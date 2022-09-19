const express = require("express");
const router = express.Router();
const verifyRole = require("../middlewares/verifyRole");
const verifyToken = require("../middlewares/verifyToken");

const lesssonsHandler = require("./handler/lessons");

router.post("/", verifyRole, lesssonsHandler.create);
router.put("/:id", verifyRole, lesssonsHandler.update);
router.delete("/:id", verifyRole, lesssonsHandler.destroy);
router.get("/:id",verifyToken, lesssonsHandler.get);
router.get("/",verifyToken, lesssonsHandler.getAll);

module.exports = router;
