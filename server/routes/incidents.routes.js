module.exports = app => {
    const incidents = require("../controllers/incidents.controller.js");
  
    var router = require("express").Router();

    router.get("/incidents",incidents.getMineIncidencts);
    router.get("/incidents/:id",incidents.getIncidentsById);
    router.post("/incidents", incidents.createIncident);
    router.delete("/incidents/:id",incidents.deleteIncident);
    app.use("/api", router);
  };