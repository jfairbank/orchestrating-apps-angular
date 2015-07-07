app.controller('ImageCtrl', function($scope) {
  function createImage(src, text) {
    return { src: src, text: text, favorited: false };
  }

  $scope.imageFavorites = [];

  $scope.images = [
    createImage('/images/cat-1.jpg', 'Cat 1'),
    createImage('/images/cat-2.jpg', 'Cat 2'),
    createImage('/images/cat-3.jpg', 'Cat 3'),
    createImage('/images/cat-4.jpg', 'Cat 4')
  ];
});
