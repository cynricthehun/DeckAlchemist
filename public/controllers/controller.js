var myApp = angular.module('DeckAlchemist', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log("Hello World from controller");

  $http({
     method: 'GET',
     url: 'userList'
  }).then(function (success){

  },function (error){

  });
}]);
