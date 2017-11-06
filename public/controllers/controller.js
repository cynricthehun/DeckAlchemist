var myApp = angular.module('DeckAlchemist', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log("Hello World from controller");

  $http.get('/userList').then(successCallback, errorCallback);

  function successCallback(response){
    console.log('I got the data I requested');
    $scope.userList = response;
  }
  function errorCallback(error){
      //error code
  }
}]);
