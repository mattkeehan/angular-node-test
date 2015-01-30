"use strict";

angular.module("SignInApp", [])

    .controller("SignInController", ["$scope", "$http", function($scope, $http) {

        $scope.title = "Sign in";
        $scope.loggedIn = false;

        $scope.logOutSuccess = function () {
            console.log("logged u out");
            $scope.loggedIn = false;
            $scope.authError="";
            $scope.title = "Sign in";
        };

        $scope.logInSuccess = function (user) {
            if (user) $scope.username = user;

            $scope.loggedIn = true;
            $scope.authError="";
            $scope.title = "Logged in";
        };

        $scope.logInFailure = function () {
            $scope.authError = "Failed to log in as " + $scope.username;
        };

        $scope.logOut = function () {
            $http({
                method: "GET",
                url: "http://localhost:3000/logout"
            }).success(function() {
                $scope.logOutSuccess();
            });
        };

        $scope.logIn = function () {
            $http({
                method: "POST",
                url: "http://localhost:3000/login",
                data: {
                    "username":$scope.username,
                    "password":$scope.password
                }
            }).success(function() {
                $scope.logInSuccess();
            }).error(function() {
                $scope.logInFailure();
            });
        };

        $scope.init = function () {
            console.log("initialising page");
            $http({
                method: "GET",
                url: "http://localhost:3000/isAuthenticated"
            }).success(function(data) {
                if (data.user !== null)
                    $scope.logInSuccess(data.user);
            });
        };


    }]);

