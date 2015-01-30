"use strict";

require("dotenv").load();
var express = require("express");
var bodyParser = require("body-parser");
var loginService = require("./app/services/login");

var app = express();
var router = express.Router();
app.use(bodyParser.json());


router.route("/login").post(function(req, res) {
    loginService.login(req, res);
});

app.use(router);
app.use(express.static(__dirname + "/app/public"));
app.listen(3000);
console.log("node started");