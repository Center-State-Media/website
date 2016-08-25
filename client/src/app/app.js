angular.module('app', [
  'ui.bootstrap',
  'ui.router',
  'duScroll',
  'home',
  'projects',
  'about',
  'contact',
  'clientPortal'
  ])

.controller('mainController', function($scope, $uibModal) {
  $scope.animationsEnabled = true;

  $scope.isCollapsed = true;
  $scope.contactClick = function() {
    $uibModal.open({
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


.value('duScrollActiveClass', 'scrollActive')
.value('duScrollBottomSpy', true);
