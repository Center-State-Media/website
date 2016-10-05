angular.module('projects', [

])

.controller('projectsController', function($scope) {
  $scope.projectImageFilter = 'Architecture'
  $scope.projectImages = [
    {
      src: '/src/assets/BrixPix-2.jpg',
      alt: 'A picture',
      keyword: 'Architecture'
    },
    {
      src: '/src/assets/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Product'
    },
    {
      src: '/src/assets/BrixPix.jpg',
      alt: 'A picture',
      keyword: 'Video'
    },
    {
      src: '/src/assets/Fruit.png',
      alt: 'Another picture',
      keyword: 'Personal'
    }
  ];

  $scope.projectFilterClick = function(query) {
    $scope.projectImageFilter = query;

  }
})
