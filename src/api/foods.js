const db = require("../models");

create = {
  post: async (req, res, next) => {
    try {
      food = await new db.foods({
        ...req.body,
      }).save();

      res.json({
        status: "success",
      });
    } catch (error) {
      next(error);
    }
  },
};

getAll = {
  get: async (req, res, next) => {
    try {
      food = await db.foods.find();
      res.json({
        foods: food,
      });
    } catch (error) {
      next(error);
    }
  },
};

getFoodCategoryAndMeal = {
  get: async (req, res, next) => {
    try {
      food = await db.foods.findByMeal(req.params.name, req.params.meal);

      res.json({
        foods: food,
      });
    } catch (error) {}
  },
};
getFoodCategory = {
  get: async (req, res, next) => {
    try {
      food = await db.foods.findByName(req.params.name);

      res.json({
        foods: food,
      });
    } catch (error) {}
  },
};

getMealType = {
  get: async (req, res, next) => {
    try {
      food = await db.foods.findByDetails(req.params.name);

      res.json({
        foods: food,
      });
    } catch (error) {}
  },
};

updateFood = {
  put: async (req, res, next) => {
    try {
      food = await db.foods.findByIdAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );

      res.json({
        foods: food,
      });
    } catch (error) {}
  },
};

deleteFood = {
  delete: async (req, res, next) => {
    try {
      food = await db.foods.findByIdAndDelete(req.params.id);

      res.json({
        meesage: "food deleted",
      });
    } catch (error) {}
  },
};
module.exports = {
  create,
  getAll,
  getFoodCategoryAndMeal,
  getFoodCategory,
  getMealType,
  deleteFood,
  updateFood,
};
