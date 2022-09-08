const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodPlanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    userInformation: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },

    foods: [
      {
        food: { type: Schema.Types.ObjectId, ref: "food" },
      },
    ],
  },
  {
    timestamps: true,
    statics: {
      findByName(name) {
        return this.find({ name: new RegExp(name, "i") });
      },
    },
  }
);

const foodPlan = mongoose.model("foodPlan", foodPlanSchema);

module.exports = foodPlan;
