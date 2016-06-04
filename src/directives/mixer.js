chaos.directive('mixer', [function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/directives/mixer.html',
    scope: {
      name: '=',
      sounds: '='
    },
    controller: ['$scope', '$timeout', 'randomSound', function ($scope, $timeout, randomSound) {
      $scope.volume = 1;
      $scope.delay = 5;

      $timeout(function(){ randomSound($scope) }, Math.random()*5000);
    }]
  }
}]);
