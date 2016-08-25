angular.module('projects', [

])

.controller('projectsController', function($scope) {
  $scope.projectImageFilter = 'Architecture'
  $scope.projectImages = [
    {
      src: '/src/assets/pineapple.jpg',
      alt: 'A picture',
      keyword: 'Architecture'
    },
    {
      src: '/src/assets/pineapple.jpg',
      alt: 'A picture',
      keyword: 'Architecture'
    },
    {
      src: '/src/assets/pineapple.jpg',
      alt: 'A picture',
      keyword: 'Architecture'
    },
    {
      src: '/src/assets/Fruit.png',
      alt: 'Another picture',
      keyword: 'Product'
    }
  ];

  $scope.projectFilterClick = function(event, query) {
    console.log(event);
    $scope.projectImageFilter = query;

  }
})
