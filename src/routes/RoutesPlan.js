const express = require("express");
const router = express.Router();
const planApi = require("../api").plan;

// router.post("/", studentApi.register.post);
// router.get("/", studentApi.getAll.get);
// router.get("/:name", studentApi.students.get);
router.post("/", planApi.register.post);
router.get("/", planApi.getAll.get);
router.get("/:name", planApi.findPlan.get);
router.delete("/:id", planApi.remove.delete);

module.exports = router;
