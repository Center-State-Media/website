angular.module('home', [
  'duScroll'
])

.controller('homeController', function($scope, $rootScope) {
// This isn't really doing anything currently
  $rootScope.$on('duScrollspy:becameActive', function($event, $element, $target){
    console.log('the event ', $event);
    console.log('the element ', $element);
    console.log('the target ', $target);
      //Automaticly update location
      var hash = $element.prop('hash');
      if (hash) {
        history.replaceState(null, null, hash);
      }
    });
})
