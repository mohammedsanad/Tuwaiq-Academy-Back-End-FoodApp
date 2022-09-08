const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
      eunm: ["Male", "female"],
    },
    age: {
      type: Number,
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    plan: [{ type: Schema.Types.ObjectId, ref: "plan" }],
    isAdmin: {
      type: Boolean,
      default: false,
    },

    // usersCal: [
    //   {
    //     usercal: {
    //       type: Number,
    //     },
    //   },
    //   {
    //     userproten: {
    //       type: Number,
    //     },
    //   },
    //   {
    //     usercarb: {
    //       type: Number,
    //     },
    //   },
    //   {
    //     userfat: {
    //       type: Number,
    //     },
    //   },
    // ],
    // userGoals: {
    //   type: String,
    //   eunm: ["gain muscle", "lose weight", "maintain weight"],
    // },
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

const user = mongoose.model("user", userSchema);

module.exports = user;
