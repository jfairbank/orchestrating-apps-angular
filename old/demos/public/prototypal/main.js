(function(angular) {
  function createImage(src, text) {
    return { src: src, text: text, favorited: false };
  }

  angular.module('app', [])
    .controller('ImageCtrl', function($scope) {
      $scope.mainImage = {};

      $scope.imageFavorites = [];

      $scope.images = [
        createImage('../images/cats/cats-q-c-640-480-3.jpg',  'Cat 1'),
        createImage('../images/cats/cats-q-c-640-480-5.jpg',  'Cat 2'),
        createImage('../images/cats/cats-q-c-640-480-9.jpg',  'Cat 3'),
        createImage('../images/cats/cats-q-c-640-480-10.jpg', 'Cat 4')
      ];
    })
    .controller('ImageCtrl2', function($scope) {
      $scope.mainImage = {};
      $scope.imageFavorites = [];
    })
    .controller('CatImageCtrl', function($scope) {
      $scope.images = [
        createImage('../images/cats/cats-q-c-640-480-3.jpg',  'Cat 1'),
        createImage('../images/cats/cats-q-c-640-480-5.jpg',  'Cat 2'),
        createImage('../images/cats/cats-q-c-640-480-9.jpg',  'Cat 3'),
        createImage('../images/cats/cats-q-c-640-480-10.jpg', 'Cat 4')
      ];
    })
    .controller('NatureImageCtrl', function($scope) {
      $scope.images = [
        createImage('../images/nature/nature-q-c-640-480-3.jpg', 'Nature 1'),
        createImage('../images/nature/nature-q-c-640-480-5.jpg', 'Nature 2'),
        createImage('../images/nature/nature-q-c-640-480-7.jpg', 'Nature 3'),
        createImage('../images/nature/nature-q-c-640-480-9.jpg', 'Nature 4')
      ];
    })
    .controller('CatImageCtrl2', function($scope) {
      $scope.mainImage = {};
      $scope.imageFavorites = [];
      $scope.images = [
        createImage('../images/cats/cats-q-c-640-480-3.jpg',  'Cat 1'),
        createImage('../images/cats/cats-q-c-640-480-5.jpg',  'Cat 2'),
        createImage('../images/cats/cats-q-c-640-480-9.jpg',  'Cat 3'),
        createImage('../images/cats/cats-q-c-640-480-10.jpg', 'Cat 4')
      ];
    })
    .controller('NatureImageCtrl2', function($scope) {
      $scope.mainImage = {};
      $scope.imageFavorites = [];
      $scope.images = [
        createImage('../images/nature/nature-q-c-640-480-3.jpg', 'Nature 1'),
        createImage('../images/nature/nature-q-c-640-480-5.jpg', 'Nature 2'),
        createImage('../images/nature/nature-q-c-640-480-7.jpg', 'Nature 3'),
        createImage('../images/nature/nature-q-c-640-480-9.jpg', 'Nature 4')
      ];
    })
    .directive('imageGallery', function() {
      return {
        scope: true,
        templateUrl: 'templates/image-gallery.html'
      };
    })
    .directive('mainImage', function() {
      return {
        scope: true,
        templateUrl: 'templates/main-image.html',
      }
    })
    .directive('imageFavorites', function() {
      return {
        scope: true,
        templateUrl: 'templates/image-favorites.html',
        link: function(scope) {
          scope.unfavorite = function(image) {
            var i = scope.imageFavorites.indexOf(image);
            if (i > -1) {
              image.favorited = false;
              scope.imageFavorites.splice(i, 1);
            }
          };
        }
      };
    })
    .directive('imageList', function() {
      return {
        scope: true,
        templateUrl: 'templates/image-list.html',
        link: function(scope) {
          scope.setMainImage = function(image) {
            scope.mainImage.src = image.src;
          };

          scope.favorite = function(image) {
            if (!image.favorited) {
              image.favorited = true;
              scope.imageFavorites.push(image);
            }
          };
        }
      };
    });
})(angular);
