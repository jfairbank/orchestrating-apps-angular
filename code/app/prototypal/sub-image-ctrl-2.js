app.controller('CatImageCtrl', function($scope) {
  $scope.mainImage = {};
  $scope.imageFavorites = [];
  $scope.images = [
    createImage('/images/cat-1.jpg', 'Cat 1'),
    createImage('/images/cat-2.jpg', 'Cat 2'),
    createImage('/images/cat-3.jpg', 'Cat 3'),
    createImage('/images/cat-4.jpg', 'Cat 4')
  ];
}).controller('NatureImageCtrl', function($scope) {
  $scope.mainImage = {};
  $scope.imageFavorites = [];
  $scope.images = [
    createImage('/images/nature-1.jpg', 'Nature 1'),
    createImage('/images/nature-2.jpg', 'Nature 2'),
    createImage('/images/nature-3.jpg', 'Nature 3'),
    createImage('/images/nature-4.jpg', 'Nature 4')
  ];
});
