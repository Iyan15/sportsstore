var sportsstore = angular.module("sportsstore", []);

sportsstore.controller("mainCtrl", function($scope){
    $scope.coba = "Hello World";
    $scope.orangs = [
        {
            "nama" : "Jono",
            "umur" : "21"
        },
        {
            "nama" : "Amin",
            "umur" : "30"
        },
        {
            "nama" : "Jaka",
            "umur" : "40"
        }
    ]
});

sportsstore.directive("hay", function(){
    return {
        template : "<div><h3>{{topic}}</h3><p ng-transclude></p></div>",
        restrict: "E",
        scope: {
            topic: '@topic',
            paragraf: '@'
        },
        replace : true,
        transclude: true
    }
});