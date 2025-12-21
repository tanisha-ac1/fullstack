const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMessages
} = require("../Controllers/contactController");

router.post("/contact", sendMessage);
router.get("/messages", getMessages);

module.exports = router;
