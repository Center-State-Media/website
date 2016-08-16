(function() {
  angular.module('app', [
    'ngMaterial'
  ])

  .controller('MainController', function($scope, MainFactory) {

  })

  .factory('MainFactory', function() {

  });
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
})();
