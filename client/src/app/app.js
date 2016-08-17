angular.module('app', [
  'ui.bootstrap',
  'ui.router',
  'home',
  'projects',
  'about'
  ])

.controller('mainController', function($scope) {
  $scope.bigData = {};

  $scope.bigData.breakfast = false;
  $scope.bigData.lunch = false;
  $scope.bigData.dinner = false;

  // COLLAPSE =====================
  $scope.isCollapsed = false;
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('home')

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/src/home/home.html',
    controller: 'homeController'
  })
  .state('projects', {
    url:'/projects',
    templateUrl: '/src/projects/projects.html',
    controller: 'projectsController'
  })
  .state('about', {
    url:'/about',
    templateUrl: '/src/about/about.html',
    controller: 'aboutController'
  })
  .state('clientPortal', {
    url:'/clientPortal',
    templateUrl: '/src/clientPortal/clientPortal.html',
    controller: 'clientPortalController'
  })
})


// .config(function($routeProvider){
//   $routeProvider
//       .when('/signin', {
//         templateUrl: '../auth/signin.html',
//         controller: 'AuthController'
//       })
//       // The raceView address will have the user and room id
//       // These ids are used for the socket instantiateUser event
//       .when('/raceView/:roomId/:userId', {
//         templateUrl: '../race/race.html',
//         controller: 'raceController'
//       })
//       // Default back to /signin page
//       .otherwise({
//         redirectTo: '/signin'
//       });
// });
