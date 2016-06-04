chaos.factory('randomSound', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
  return function playSound(scope) {
    if (scope.delay != 0) {
      var randomSoundFile = scope.sounds[Math.floor(Math.random()*scope.sounds.length)];
      var audioUrl = 'sounds/' + scope.name + '/' + randomSoundFile
      var sound = new Audio(audioUrl);
      sound.volume = scope.volume * $rootScope.masterVolume;
      sound.play();
    }

    var randomDelay = Math.random() * (11 - scope.delay) * 1000 + (10 - scope.delay) * 500;
    $timeout(function(){ playSound(scope) }, randomDelay);
  }
}]);
