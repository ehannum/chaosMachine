chaos.factory('playSound', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
  return {
    random: function playSound(scope) {
      if (scope.delay != 0 && !$rootScope.muted) {
        var randomSoundFile = scope.sounds[Math.floor(Math.random()*scope.sounds.length)];
        var audioUrl = 'sounds/' + scope.name + '/' + randomSoundFile
        var sound = new Audio(audioUrl);
        sound.volume = scope.volume * $rootScope.masterVolume;
        sound.play();

        // sounds are automatically garbage collected as soon as they are finished as long as there are no references
        // since we're keeping a refernece to them we need to remove it when they finish.
        $rootScope.allSounds.push(sound);

        // pause event also triggers on end as long as looping is not on (it isn't).
        sound.addEventListener('pause', function () {
          for (var i = 0; i < $rootScope.length; i++) {
            if ($rootScope[i] === sound) {
              $rootScope.splice(i, 1);
              break;
            }
          }
        });
      }

      var randomDelay = Math.random() * (11 - scope.delay) * 1000 + (11 - scope.delay) * 1000;
      $timeout(function(){ playSound(scope) }, randomDelay);
    },
    shutup: function (sounds) {
      var randomSoundFile = sounds[Math.floor(Math.random()*sounds.length)];
      var audioUrl = 'sounds/shutup/' + randomSoundFile
      var sound = new Audio(audioUrl);
      sound.volume = $rootScope.masterVolume;
      sound.play();
      this.stopAll();
    },
    stopAll: function () {
      for (var i = 0; i < $rootScope.allSounds.length; i++) {
        $rootScope.allSounds[i].pause();
      }
      $rootScope.allSounds = [];
      $rootScope.muted = true;
      $timeout(function(){ $rootScope.muted = false }, 5000);
    }
  }
}]);
