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
      src: 'https://d1usweb7g8r3t1.cloudfront.net/architecture/tourOfHomes1.jpg',
      alt: 'Tour of Homes 1',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/architecture/tourOfHomes2.jpg',
      alt: 'Tour of Homes 2',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/architecture/zillahWinery.jpg',
      alt: 'Zillah Winery',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/architecture/tourOfHomes3.jpg',
      alt: 'Tour of Homes 3',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/product/baleBreakerCans.jpg',
      alt: 'Bale Breaker Cans',
      keyword: 'Product',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/product/baleBreakerDrone.jpg',
      alt: 'Bale Breaker Drone',
      keyword: 'Product',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/product/vineyard.jpg',
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
      src: 'https://d1usweb7g8r3t1.cloudfront.net/personal/Rams.jpg',
      alt: 'Rams',
      keyword: 'Personal',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/personal/Cambodia.jpg',
      alt: 'Cambodia',
      keyword: 'Personal',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/personal/Ocean.jpg',
      alt: 'Ocean',
      keyword: 'Personal',
      video: false
    }
  ];

  $scope.projectFilterClick = function(query) {
    $scope.projectImageFilter = query;
  }
})
