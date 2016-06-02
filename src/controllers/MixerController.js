chaos.controller('mixerController', ['$scope', '$http', function ($scope, $http) {
  $scope.folders = {};

  $http.get('/sounds')
  .success(function (data) {
    console.log(data);
    $scope.folders = data;
  })
  .error(function (err) {
    console.warn(err);
  });
}]);
