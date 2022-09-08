const express = require("express");
const router = express.Router();
const foodApi = require("../api").food;

// router.post("/", courseApi.create.post);
router.post("/", foodApi.create.post);
router.get("/", foodApi.getAll.get);
router.get("/food/:name/:meal", foodApi.getFoodCategoryAndMeal.get);
router.get("/food/:name", foodApi.getFoodCategory.get);
router.get("/meal/:name", foodApi.getMealType.get);
router.delete("/:id", foodApi.deleteFood.delete);
router.put("/:id", foodApi.updateFood.put);

module.exports = router;
