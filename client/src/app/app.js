angular.module('app', [
  'ui.bootstrap',
  'ui.router',
  'duScroll',
  'home',
  'projects',
  'about',
  'contact'
  ])

.controller('mainController', function($scope, $uibModal) {
  $scope.animationsEnabled = true;

  $scope.contactClick = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/src/contact/contact.html',
      controller: 'contactController',
      size: 'lg'
    });

    // modalInstance.result.then(function (selectedItem) {
    //   $scope.selected = selectedItem;
    // }, function () {
    //   $log.info('Modal dismissed at: ' + new Date());
    // });
  }
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
