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

  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // employerview route loads employerview.html
  app.get("/employerview", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/employerview.html"));
  });
   // employerPost route loads employerPost.html
   app.get("/employerPost", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/employerPost.html"));
  });

  // eventview route loads eventview.html
  app.get("/eventview", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/eventview.html"));
  });

    // event Post route loads eventPost.html
    app.get("/eventPost", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/eventPost.html"));
    });

  // freelancer view route loads frelancerview.html
  app.get("/freelancerview", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/freelancerview.html"));
  });
   // freelancer Post view route loads freePost.html
   app.get("/freePost", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/freePost.html"));
  });

};
