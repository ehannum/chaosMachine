chaos.directive('mixer', [function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/directives/mixer.html',
    scope: {
      name: '=',
      sounds: '='
    },
    controller: ['$scope', function ($scope) {

    }]
  }
}]);
