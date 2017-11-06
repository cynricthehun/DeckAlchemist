var myApp = angular.module('DeckAlchemist', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log("Hello World from controller");

  $scope.userList = [];
  $scope.user = [];
  var refresh = function() {
    $http.get('/userList').then(successCallback, errorCallback);

    function successCallback(response){
      console.log('I got the data I requested');
      $scope.userList = response.data;
      $scope.user = "";
      console.log(response.data);
    }
    function errorCallback(error){
        //error code
    }
  }
  refresh();
  $scope.addUser = function() {
    console.log($scope.user)
    $http.post('/userList', $scope.user).success(function(response){
      console.log(response);
    });
    refresh();
  };

}]);
