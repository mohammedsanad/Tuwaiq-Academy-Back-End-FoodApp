const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodsSchema = new Schema(
  {
    name: {
      type: String,
    },
    nutrition: {
      calories: {
        type: Number,
      },
      carb: {
        type: Number,
      },
      protein: {
        type: Number,
      },
      fat: {
        type: Number,
      },
      ServingSize: {
        type: Number,
      },
    },
    foodCategory: {
      type: String,
    },
    mealType: {
      type: String,
      enum: ["breakfast", "lunch", "snacks", "dinner"],
    },
    foodimg: {
      type: String,
    },
  },

  {
    timestamps: true,
    statics: {
      findByMeal(name, meal) {
        return this.find({
          foodCategory: new RegExp(name, "i"),
          mealType: new RegExp(meal, "i"),
        });
      },
      findByDetails(name) {
        return this.find({ mealType: new RegExp(name, "i") });
      },
      findByName(name) {
        return this.find({ foodCategory: new RegExp(name, "i") });
      },
    },
  }
);

const foods = mongoose.model("food", foodsSchema);

module.exports = foods;
