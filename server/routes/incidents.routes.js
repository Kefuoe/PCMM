module.exports = app => {
    const incidents = require("../controllers/incidents.controller.js");
  
    var router = require("express").Router();

    router.get("/incidents",incidents.getMineIncidencts);
    router.get("/incidents/:id",incidents.getIncidentsById);
    app.use("/api", router);
  };