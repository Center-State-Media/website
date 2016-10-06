angular.module('contact', [

])

.controller('contactController', function($scope, $http) {
  $scope.userContact = {};


  $scope.submitContactForm = function() {
    console.log('the ', $scope.userContact);
    $http.get('/contactSubmit', {
      params: {
        contactName: $scope.userContact.name,
        contactEmail: $scope.userContact.email,
        contactPhone: $scope.userContact.phone,
        contactDescription: $scope.userContact.interest
      }
    })
    .then(function(resp) {
      console.log(resp);
    }, function(error) {
      console.log(resp);
    })
  }
})
