chaos.controller('mixerController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
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
