angular.module('projects', [

])

.controller('projectsController', function($scope) {
  $scope.projectImageFilter = 'Architecture'
  $scope.projectImages = [
    {
      src: '/src/assets/BrixPix-2.jpg',
      alt: 'A picture',
      keyword: 'Architecture',
      video: false
    },
    {
      src: '/src/assets/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Product',
      video: false
    },
    {
      src: '/src/assets/BrixPix.jpg',
      alt: 'A picture',
      keyword: 'Video',
      video: true
    },
    {
      src: '/src/assets/BrixPix-3.jpg',
      alt: 'Another picture',
      keyword: 'Personal',
      video: false
    },
    {
      src: '/src/assets/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Product',
      video: false
    },
    {
      src: '/src/assets/BrixPix.jpg',
      alt: 'A picture',
      keyword: 'Video',
      video: true
    },
    {
      src: '/src/assets/BrixPix-3.jpg',
      alt: 'Another picture',
      keyword: 'Personal',
      video: false
    },
    {
      src: '/src/assets/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Product',
      video: false
    },
    {
      src: '/src/assets/BrixPix-3.jpg',
      alt: 'Another picture',
      keyword: 'Personal',
      video: false
    }
  ];

  $scope.projectFilterClick = function(query) {
    $scope.projectImageFilter = query;

  }
})
