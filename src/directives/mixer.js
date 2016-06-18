chaos.directive('mixer', [function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/directives/mixer.html',
    scope: {
      name: '=',
      sounds: '='
    },
    controller: ['$scope', '$timeout', 'playSound', function ($scope, $timeout, playSound) {
      $scope.volume = 1;
      $scope.delay = 5;

      if ($scope.name.toLowerCase() === 'music') {
        playSound.music($scope);
      } else {
        playSound.random($scope);
      }
    }]
  }
}]);
