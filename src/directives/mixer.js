chaos.directive('mixer', [function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/directives/mixer.html',
    scope: {
      name: '=',
      sounds: '='
    },
    controller: ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
      $scope.volume = 1;
      $scope.delay = 50;

      var playSound = function () {
        var randomSoundFile = $scope.sounds[Math.floor(Math.random()*$scope.sounds.length)];
        var audioUrl = 'sounds/' + $scope.name + '/' + randomSoundFile
        var sound = new Audio(audioUrl);
        sound.volume = $scope.volume * $rootScope.masterVolume;
        sound.play();

        var randomDelay = Math.random() * $scope.delay * 100 + Math.random() * 1000 + 500;
        $timeout(playSound, randomDelay);
      }

      playSound();
    }]
  }
}]);
