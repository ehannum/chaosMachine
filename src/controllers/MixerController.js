chaos.controller('mixerController', ['$scope', '$rootScope', '$http', 'playSound', function ($scope, $rootScope, $http, playSound) {
  $scope.folders = {};
  $scope.shutupSounds = [];

  $scope.playShutup = function () {
    playSound.shutup($scope.shutupSounds);
  }

  $http.get('/sounds')
  .success(function (data) {
    $scope.shutupSounds = data.shutup;
    delete data.shutup;
    $scope.folders = data;
  })
  .error(function (err) {
    console.warn(err);
  });
}]);
