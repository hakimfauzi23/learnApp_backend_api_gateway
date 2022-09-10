const express = require("express");
const router = express.Router();
const refrehTokensHandler = require("./handler/refresh-tokens");

router.post("/", refrehTokensHandler.refreshToken);

module.exports = router;
