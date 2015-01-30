"use strict";

angular.module("SignInApp", [])
    .controller("SignInController", ["$scope", "$http", function($scope, $http) {

        $scope.submit = function () {
            console.log($scope.username + " : " + $scope.password);
            $http({
                method: "POST",
                url: "http://localhost:3000/login",
                data: {
                    "username":$scope.username,
                    "password":$scope.password
                }
            }).success(function(data) {
                console.log(data);
            }).error(function(data) {
                console.log(data);
            });
        };


    }]);

