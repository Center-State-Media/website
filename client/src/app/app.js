angular.module('app', [
  'ui.bootstrap',
  'ui.router',
  'home',
  'projects',
  'about',
  'contact',
  'clientPortal'
  ])

.controller('mainController', function($scope) {
  $scope.animationsEnabled = true;

  $scope.isCollapsed = true;

  $scope.theCurrentYear = new Date().getFullYear();
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
  .state('contact', {
    url:'/contact',
    templateUrl: 'src/contact/contact.html',
    controller: 'contactController'
  })
})
