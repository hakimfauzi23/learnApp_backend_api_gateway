var express = require("express");
var router = express.Router();

const coursesHandler = require("./handler/courses");
const verifyRole = require("../middlewares/verifyRole");

router.get("/", coursesHandler.getAll);
router.get("/:id", coursesHandler.get);
router.post("/", verifyRole("admin"), coursesHandler.create);
router.put("/:id", verifyRole("admin"), coursesHandler.update);
router.delete("/:id", verifyRole("admin"), coursesHandler.destroy);

module.exports = router;
