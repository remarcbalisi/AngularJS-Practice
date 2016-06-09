var App = angular.module('mainApp', []);
App.controller("AppController", function($scope, $http){
    $http.get('http://127.0.0.1:8000/api/projects/projecttracker/')
    .success(function(result){
        $scope.persons = result.name;
    });
});
