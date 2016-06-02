chaos.directive('mixer', [function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/directives/mixer.html',
    scope: {
      name: '=',
      sounds: '='
    },
    controller: ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.volume = 100;
      $scope.delay = 50;

      var playSound = function () {
        var randomSoundFile = $scope.sounds[Math.floor(Math.random()*$scope.sounds.length)];
        var audioUrl = 'sounds/' + $scope.name + '/' + randomSoundFile
        var sound = new Audio(audioUrl);
        sound.volume = $scope.volume/100;
        sound.play();

        var randomDelay = Math.random() * $scope.delay * 100 + 1000;
        $timeout(playSound, randomDelay);
      }

      playSound();
    }]
  }
}]);
