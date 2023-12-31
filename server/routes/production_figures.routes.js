module.exports = app => {
    const figures = require("../controllers/production_figures.controller.js");
  
    var router = require("express").Router();
  
   // router.get("/figures",figures.getProductionFigures);
    router.get("/figures/:material", figures.getMineByMaterial);
    router.get("/figures/material/:id", figures.getProductById);
    router.get("/figures/",figures.getProductionFiguresFilter);
   app.use("/api", router);
  };