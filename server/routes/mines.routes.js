module.exports = app => {
    const mines = require("../controllers/mines.controller.js");
  
    var router = require("express").Router();
  
    router.get("/mines",mines.getMines);
    router.get("/mines/:id", mines.getMineById);
    router.get("/mines/contacts/:id", mines.getMineContact);
  
   //app.get('/mines', db.getUsers)
   app.use("/api", router);
  };