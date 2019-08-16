// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home1.html"));
  });

  // cms route loads cms.html
  app.get("/eventview", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/eventview.html"));
  });
  app.post 
  // app.get("/employerview", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/employerview.html"));
  // });

  // blog route loads blog.html
  // app.get("/postEmployer", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/postEmployer.html"));
  // });
  // app.get("/postFreelancer", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/postFreelancer.html"));
  // });

  // authors route loads author-manager.html
  // app.get("/freelancerview", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/freelancerview.html"));
  // });

};
