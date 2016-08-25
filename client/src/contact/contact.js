angular.module('contact', [

])

.controller('contactController', function($scope, $uibModalInstance) {
  $scope.userContact = {};
  
  $scope.closeContactForm = function() {
    $uibModalInstance.dismiss('cancel');
  }

  $scope.submitContactForm = function() {

  }
})
