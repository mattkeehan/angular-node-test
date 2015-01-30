"use strict";

require("dotenv").load();
var express = require("express");
var bodyParser = require("body-parser");
var expressSession = require("express-session");
var cookieParser = require("cookie-parser");
var loginService = require("./app/services/login");

var app = express();
var router = express.Router();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({secret:"somesecrettokenhere", saveUninitialized: true, resave: true}));


router.route("/login").post(function(req, res) {
    loginService.login(req, res);
});

router.route("/isAuthenticated").get(function(req, res) {
    loginService.isLoggedIn(req, res);
});

router.route("/logout").get(function (req, res) {
   loginService.logout(req, res);
});

app.use(router);
app.use(express.static(__dirname + "/app/public"));
app.listen(3000);
console.log("node started");