var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();  // make express app
var http = require('http').Server(app);

// set up the view engine
app.use(express.static(__dirname + '/assets'));
app.set("views", path.resolve(__dirname, "assets")); // path to views
app.set("view engine", "ejs"); // specify our view engine

// manage our entries
var entries = [];
app.locals.entries = entries;

// set up the logger
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// http GET (default and /new-entry)
app.get("/", function (request, response) {
  response.render("home");
});
app.get("/Distillation", function (request, response) {
  response.render("Distillation");
});
app.get("/Efficency", function (request, response) {
  response.render("Efficency");
});
app.get("/contact", function (request, response) {
  response.render("contact");
});
app.get("/GuestBook", function (request, response) {
  response.render("GuestBook");
});
app.get("/new-entry", function (request, response) {
  response.render("new-entry");
});

// http POST (INSERT)
app.post("/new-entry", function (request, response) {
  if (!request.body.title || !request.body.body) {
    response.status(400).send("Entries must have a title and a body.");
    return;
  }
  entries.push({
    title: request.body.title,
    content: request.body.body,
    published: new Date()
  });
  response.redirect("/GuestBook");
});

// 404
app.use(function (request, response) {
  response.status(404).render("404");
});

// Listen for an application request on port 8081
http.listen(8081, function () {
  console.log('server running at http://127.0.0.1:8081/');
});
function calculate(){
                var a = document.calculatex.first.value;
        var b = document.calculatex.second.value;
        var d = document.calculatex.thrid.value;
        var e = parseInt(b)-parseInt(d);
        var f = parseInt(a)-parseInt(d);
        var c = parseInt(e) / parseInt(f);
        document.calculatex.result.value= c;
     }