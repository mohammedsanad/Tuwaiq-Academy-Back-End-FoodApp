const foodsRoutes = require("./Routesfoods");
const planRoutes = require("./RoutesPlan");
const usersRoutes = require("./RoutesUsers");

module.exports = (app) => {
  app.use("/foods", foodsRoutes);
  app.use("/plan", planRoutes);
  app.use("/users", usersRoutes);

  app.use(function (req, res, next) {
    res.status(404);
    res.json({
      message: "Not found",
    });
  });

  if (app.get("env") === "development") {
    app.use(function (err, req, res, next) {
      console.log(err);
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err,
      });
    });
  }

  app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({
      message: "Internal server error",
      error: {},
    });
  });

  app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({
      message: "Internal server error",
      error: {},
    });
  });
};
