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
      src: 'https://s3-us-west-2.amazonaws.com/center-state-media/interior1.jpg',
      alt: 'Interior 1',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/center-state-media/interior2.jpg',
      alt: 'Interior 2',
      keyword: 'Architecture',
      video: false
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/center-state-media/zillha+winery1.jpg',
      alt: 'Zillah Winery',
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
      src: 'https://s3-us-west-2.amazonaws.com/center-state-media/Berkshire+Canvas+Photos.jpg',
      alt: 'Rams',
      keyword: 'Personal',
      video: false
    },
    {
      src: 'https://d1usweb7g8r3t1.cloudfront.net/BrixPix-3.jpg',
      alt: 'Vineyard',
      keyword: 'Personal',
      video: false
    }
  ];

  $scope.projectFilterClick = function(query) {
    $scope.projectImageFilter = query;
  }
})
