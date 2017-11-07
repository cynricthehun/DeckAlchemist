var myApp = angular.module('DeckAlchemist', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log("Hello World from controller");

  $scope.userList = [];
  $scope.newUser = {
    name: "",
    email: "",
    number: "",
    admin: false
  }
  var refresh = function() {
    $http.get('/userList').then(successCallback, errorCallback);

    function successCallback(response){
      console.log('I got the data I requested');
      $scope.userList = response.data;
      $scope.newUser = {
        name: "",
        email: "",
        number: "",
        admin: false
      }
      console.log(response.data);
    }
    function errorCallback(error){
        //error code
    }
  }

  refresh();

  $scope.addUser = function() {
    console.log($scope.newUser)
    $http.post('/userList', $scope.newUser).then(function(response){
      console.log(response);
      refresh();
    });
  };

  $scope.removeUser = function(id) {
    console.log(id);
    $http.delete('/userList:' + id).then(function(response){
      refresh();
    });
  };

}]);
