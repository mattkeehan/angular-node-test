"use strict";

var auth = require("../libs/auth");

function createSession (session, user) {
    session.username = user;
}

function login (req, res) {
    if (! auth.login(req.body.username, req.body.password))
        return res.status(401).json({"login":"failure"});

    createSession(req.session, req.body.username);

    //todo: record in mongo
    res.json({"login":"success"});
}

function isLoggedIn(req, res) {
    if (req.session.username) {
        console.log("user: " + req.session.username);
        return res.json({"user":req.session.username});
    }

    res.json({"user":null});
}

function logout (req, res) {
    console.log("node logout");
    req.session.destroy();
    res.json({"logout":"success"});
}

module.exports = {
    login: login,
    isLoggedIn: isLoggedIn,
    logout: logout
}