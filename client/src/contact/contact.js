angular.module('contact', [

])

.controller('contactController', function($scope, $http) {
  $scope.userContact = {};

  $scope.messageSentSucccess = false;
  $scope.buttonMessage = 'Send Message'

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
        $scope.updateMessage('Sent', true);
        return;
    }, function(error) {
      $scope.updateMessage('Error', false);
    })
  }
  $scope.updateMessage = function(message, messageSentSuccessfully) {
    $scope.buttonMessage = message;
    $scope.messageSentSucccess = messageSentSuccessfully
  }
})
