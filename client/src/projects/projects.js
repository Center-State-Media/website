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
      src: 'https://d1usweb7g8r3t1.cloudfront.net/tourOfHomes1.jpg',
      alt: 'Tour of Homes 1',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/tourOfHomes2.jpg',
      alt: 'Tour of Homes 2',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/zillahWinery.jpg',
      alt: 'Zillah Winery',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/tourOfHomes3.jpg',
      alt: 'Tour of Homes 3',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/baleBreakerCans.jpg',
      alt: 'Bale Breaker Cans',
      keyword: 'Product',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/baleBreakerDrone.jpg',
      alt: 'Bale Breaker Drone',
      keyword: 'Product',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/vineyard.jpg',
      alt: 'Vineyard',
      keyword: 'Product',
      video: false
    },
    // {
    //   src: 'https://d1usweb7g8r3t1.cloudfront.net/',
    //   alt: 'A picture',
    //   keyword: 'Video',
    //   video: true
    // },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/Rams.jpg',
      alt: 'Rams',
      keyword: 'Personal',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/Cambodia.jpg',
      alt: 'Cambodia',
      keyword: 'Personal',
      video: false
    }
  ];

  $scope.projectFilterClick = function(query) {
    $scope.projectImageFilter = query;
  }
})
