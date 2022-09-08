const db = require("../models");
const joi = require("joi");

register = {
  post: async (req, res, next) => {
    try {
      console.log(req.body);
      const schema = joi
        .object({
          name: joi.string().alphanum().min(3).max(55).required(),
        })
        .options({ stripUnknown: true });

      schema.validate(req.body);

      // check if the course is their
      const result = await db.course.findOne({ name: req.body.course });
      if (result != req.body.course) {
        res.send("The course is not found");
        return;
      }

      // check if the semester is their
      const semesterFind = await db.semester.findOne({
        name: req.body.semester,
      });
      if (semesterFind != req.body.semester) {
        res.send("The semester is not found");
        return;
      }

      console.log(req.body);

      student = await new db.student({
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
      student = await db.student.find();

      res.json({
        student: student,
      });
    } catch (error) {
      next(error);
    }
  },
};

findPlan = {
  get: async (req, res, next) => {
    try {
      plan = await db.plan.findByName(req.params.name);

      res.json({
        plans: plan,
      });
    } catch (error) {
      next(error);
    }
  },
};

remove = {
  delete: async (req, res, next) => {
    try {
      plan = await db.plan.findByIdAndDelete({ _id: req.params.id });

      res.json({
        message: "plan deleted!",
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = {
  register,
  getAll,
  findPlan,
  remove,
};
