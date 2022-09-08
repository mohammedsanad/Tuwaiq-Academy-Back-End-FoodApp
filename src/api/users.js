const db = require("../models");
const joi = require("joi");

register = {
  post: async (req, res, next) => {
    try {
      console.log(req.body);
      const schema = joi
        .object({
          firstName: joi.string().alphanum().min(3).max(55).required(),
          lastName: joi.string().alphanum().min(3).max(55).required(),
          birthDate: joi.date().required(),
          isMarried: joi.boolean().required(),
        })
        .options({ stripUnknown: true });

      schema.validate(req.body);

      console.log(req.body);

      userss = await new db.users({
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

login = {
  post: async (req, res, next) => {
    try {
      const schema = joi
        .object({
          email: joi.string().email().required(),
          password: joi.string().required(),
        })
        .options({ stripUnknown: true });

      schema.validate(req.body);

      let user = await db.user.findOne({
        email: req.body.email,
      });

      if (!user) {
        res
          .status(403)
          .json({ code: 1103, message: "password or user incorrect" });
        return;
      }

      res.json({
        status: "logged in",
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: err,
      });
    }
  },
};

getAll = {
  get: async (req, res, next) => {
    try {
      userss = await db.userss.find();

      res.json({
        semester: semester,
      });
    } catch (error) {
      next(error);
    }
  },
};

remove = {
  delete: async (req, res, next) => {
    try {
      userss = await db.userss.findByIdAndDelete({ _id: req.params.id });

      res.json({
        message: "userss deleted!",
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = {
  register,
  getAll,
  remove,
  login,
};
