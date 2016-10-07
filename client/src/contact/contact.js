angular.module('contact', [

])

.controller('contactController', function($scope, $http) {
  $scope.userContact = {};

  $scope.messageSentSuccess = false;
  $scope.messageSentError = false;

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
      messageSentSuccess = true;
    }, function(error) {
      console.log(resp);
      messageSentError = false;
    })
  }
})
