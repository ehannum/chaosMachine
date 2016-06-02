var chaos = angular.module('chaos', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('/', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'mixerController'
  });
}])

.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }).hashPrefix('!');
}])

.run(['$rootScope', '$http', function ($rootScope, $http) {
  $rootScope.masterVolume = 0;
}]);
