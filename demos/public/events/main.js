(function(angular) {
  function createImage(src, text) {
    return { src: src, text: text, favorited: false };
  }

  angular.module('app', [])
    .controller('ImageCtrl', function($scope) {
      $scope.catImages = [
        createImage('../images/cats/cats-q-c-640-480-3.jpg',  'Cat 1'),
        createImage('../images/cats/cats-q-c-640-480-5.jpg',  'Cat 2'),
        createImage('../images/cats/cats-q-c-640-480-9.jpg',  'Cat 3'),
        createImage('../images/cats/cats-q-c-640-480-10.jpg', 'Cat 4')
      ];

      $scope.natureImages = [
        createImage('../images/nature/nature-q-c-640-480-3.jpg', 'Nature 1'),
        createImage('../images/nature/nature-q-c-640-480-5.jpg', 'Nature 2'),
        createImage('../images/nature/nature-q-c-640-480-7.jpg', 'Nature 3'),
        createImage('../images/nature/nature-q-c-640-480-9.jpg', 'Nature 4')
      ];
    })
    .directive('imageGallery', function() {
      return {
        scope: {
          images: '='
        },
        templateUrl: 'templates/image-gallery.html',
        link: function(scope) {
          scope.$on('delegate:set:mainImage', function(e, image) {
            scope.$broadcast('set:mainImage', image);
          });

          scope.$on('delegate:favorite:image', function(e, image) {
            scope.$broadcast('favorite:image', image);
          });
        }
      };
    })
    .directive('mainImage', function() {
      return {
        scope: {},
        templateUrl: 'templates/main-image.html',
        link: function(scope) {
          scope.mainImage = {};

          scope.$on('set:mainImage', function(e, image) {
            scope.mainImage.src = image.src;
          });
        }
      }
    })
    .directive('imageFavorites', function() {
      return {
        scope: {},
        templateUrl: 'templates/image-favorites.html',
        link: function(scope) {
          scope.imageFavorites = [];

          scope.$on('favorite:image', function(e, image) {
            scope.imageFavorites.push(image);
          });

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
        scope: {
          images: '=',
        },
        templateUrl: 'templates/image-list.html',
        link: function(scope, el, attrs, ctrl) {
          scope.setMainImage = function(image) {
            scope.$emit('delegate:set:mainImage', image);
          };

          scope.favorite = function(image) {
            if (!image.favorited) {
              image.favorited = true;
              scope.$emit('delegate:favorite:image', image);
            }
          };

          scope.setMainImage(scope.images[0]);
        }
      };
    });
})(angular);
