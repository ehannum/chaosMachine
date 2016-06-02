var chaos = angular.module('chaos', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('/', {
    url: '/',
    templateUrl: 'templates/module.html',
    controller: ['$scope', function ($scope) {
      (new Audio('sounds/cartoon/boing.mp3')).play()
    }]
  });
}])

.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }).hashPrefix('!');
}])

.run(['$rootScope', '$http', function ($rootScope, $http) {

}]);
