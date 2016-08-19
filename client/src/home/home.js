angular.module('home', [
  'duScroll'
])

.controller('homeController', function($scope, $rootScope, $document) {
// This isn't really doing anything currently
  $scope.sidebarScrollTo = function(location) {
    console.log('loc ', location);
    var element = angular.element(document.getElementById(location));
    console.log('ele ', element);
    $document.scrollToElementAnimated(element, 50);
  }
  // $rootScope.$on('duScrollspy:becameActive', function($event, $element, $target){
  //   console.log('the event ', $event);
  //   console.log('the element ', $element);
  //   console.log('the target ', $target);
  //     //Automaticly update location
  //     var hash = $element.prop('hash');
  //     if (hash) {
  //       history.replaceState(null, null, hash);
  //     }
  //   });
})
