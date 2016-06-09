///<reference path="angular.js"/>
var AuthorApp = angular.module('AuthorApp', []);
AuthorApp.controller("MyController", function($scope){
    $scope.authors = [
            {'name':'Maruti makmanwa'},
            {'name':'Rahul shawarma'},
            {'name':'Ram Awesome'},
            {'name':'ica mylabs'}
    ];
});
