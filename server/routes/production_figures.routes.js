module.exports = app => {
    const figures = require("../controllers/production_figures.controller.js");
  
    var router = require("express").Router();
  
    router.get("/figures",figures.getProductionFigures);
    router.get("/figures/:material", figures.getMineByMaterial);
  
   //app.get('/mines', db.getUsers)
   app.use("/api", router);
  };