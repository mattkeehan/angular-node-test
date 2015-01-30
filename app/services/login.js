"use strict";

var auth = require("../libs/auth");

function login (req, res) {
    if (! auth.login(req.body.username, req.body.password))
        return res.status(401).json({"login":"failure"});


    //todo: create a session
    //todo: record in mongo
    res.json({"login":"success"});
}

module.exports = {
    login: login
}