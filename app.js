var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){

    $routeProvider

    .when('/',{
        templateUrl : '/pages/main_page.html',
        controller : 'mainController'

    })
    .when('/signup',{
        templateUrl : 'pages/signup.html',
        controller : 'SignupController'
    })

    .when('/login',{
        templateUrl : 'pages/login.html',
        controller : 'LoginController'
    })

    .when('/add_product',{
      templateUrl : 'pages/add_product.html',
      controller : 'product'
    });

}]);
myApp.controller('product',['$scope','$log','$routeParams','$location',function($scope,$log,$routeParams,$location){

  $scope.clicked = function(){
    $location.path('/add_product');
  }

}]);

myApp.controller('addProduct',['scope',function($scope){

  $scope.val = {
    ref = ['jpg','jpeg','png'],
    validate : function(){
      name = file.name | lowercase;
      length = name.length();
      ext = name.LastIndexOf(".")+1;
      ext1 = name.substring(ext,length);

      for(k=0;k<=0;k++){
        if(ref[k]==ext1){
          return 'valid';
        }
      }
    }
  }

}])

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