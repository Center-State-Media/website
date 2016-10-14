angular.module('projects', [
  'ui.bootstrap',
  'ngTouch'
])

.controller('projectsController', function($scope) {
  $scope.projectImageFilter = 'Architecture'

  $scope.myInterval = 5000;
  $scope.active = 0;

  $scope.projectImages = [
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Product',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Video',
      video: true
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'Another picture',
      keyword: 'Personal',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Product',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Video',
      video: true
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'Another picture',
      keyword: 'Personal',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'A picture',
      keyword: 'Product',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'Another picture',
      keyword: 'Personal',
      video: false
    }
  ];

  $scope.projectFilterClick = function(query) {
    $scope.projectImageFilter = query;
  }
})
