var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){

    $routeProvider

    .when('/',{
        templateUrl : '/pages/login.html',
        controller : 'mainController'

    })
    .when('/signup',{
        templateUrl : 'pages/signup.html',
        controller : 'SignupController'
    })

    .when('/login',{
        templateUrl : 'pages/login.html',
        controller : 'LoginController'
    });

}]);


myApp.controller('mainController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){


}]);
myApp.controller('SignupController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){


    $scope.user = {
        password: "",
        confirmPassword: ""
      };

}]);
myApp.controller('LoginController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){

  


}]);

myApp.directive("compareTo", function() {
    return {
      require: "ngModel",
      scope: {
        confirmPassword: "=compareTo"
      },
      link: function(scope, element, attributes, modelVal) {

        modelVal.$validators.compareTo = function(val) {
          return val == scope.confirmPassword;
        };

        scope.$watch("confirmPassword", function() {
          modelVal.$validate();
        });
      }
    };
  });