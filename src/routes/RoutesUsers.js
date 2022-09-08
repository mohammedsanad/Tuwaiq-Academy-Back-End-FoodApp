const express = require("express");
const router = express.Router();
const usersApi = require("../api").users;

// router.post("/", semesterApi.register.post);
// router.get("/", semesterApi.getAll.get);
// router.delete("/:id", semesterApi.remove.delete);
router.post("/", usersApi.register.post);
router.get("/", usersApi.getAll.get);
router.delete("/:id", usersApi.remove.delete);

module.exports = router;
