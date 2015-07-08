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
          scope.mainImage = {};
          scope.imageFavorites = [];

          scope.setMain = function(image) {
            scope.mainImage.src = image.src;
          };

          scope.favorite = function(image) {
            scope.imageFavorites.push(image);
          };

          scope.unfavorite = function(image) {
            var i = scope.imageFavorites.indexOf(image);
            if (i > -1) {
              scope.imageFavorites.splice(i, 1);
            }
          };
        }
      };
    })
    .directive('mainImage', function() {
      return {
        scope: {
          mainImage: '=image'
        },
        templateUrl: 'templates/main-image.html'
      }
    })
    .directive('imageFavorites', function() {
      return {
        scope: {
          imageFavorites: '=images',
          triggerUnfavorite: '&onUnfavorite'
        },
        templateUrl: 'templates/image-favorites.html',
        link: function(scope) {
          scope.unfavorite = function(image) {
            image.favorited = false;
            scope.triggerUnfavorite({ image: image });
          };
        }
      };
    })
    .directive('imageList', function() {
      return {
        scope: {
          images: '=',
          setMainImage: '&onSetMain',
          triggerFavorite: '&onFavorite'
        },
        templateUrl: 'templates/image-list.html',
        link: function(scope, el, attrs, ctrl) {
          scope.setMainImage({
            image: scope.images[0]
          });

          scope.favorite = function(image) {
            if (!image.favorited) {
              image.favorited = true;
              scope.triggerFavorite({ image: image });
            }
          };
        }
      };
    });
})(angular);
