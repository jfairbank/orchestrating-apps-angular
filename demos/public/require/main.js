(function(angular) {
  function createImage(src, text) {
    return { src: src, text: text, favorited: false };
  }

  angular.module('app', [])
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
    .directive('imageGallery', function() {
      return {
        scope: true,
        templateUrl: 'templates/image-gallery.html',
        controller: function($scope) {
          this.mainImage = {};
          this.imageFavorites = [];

          this.setMainImage = function(image) {
            this.mainImage.src = image.src;
          };

          this.favorite = function(image) {
            if (!image.favorited) {
              image.favorited = true;
              this.imageFavorites.push(image);
            }
          };

          this.unfavorite = function(image) {
            var i = this.imageFavorites.indexOf(image);
            if (i > -1) {
              image.favorited = false;
              this.imageFavorites.splice(i, 1);
            }
          };
        }
      };
    })
    .directive('mainImage', function() {
      return {
        require: '^imageGallery',
        scope: true,
        templateUrl: 'templates/main-image.html',
        link: function(scope, el, attrs, ctrl) {
          scope.ctrl = ctrl;
        }
      }
    })
    .directive('imageFavorites', function() {
      return {
        require: '^imageGallery',
        scope: true,
        templateUrl: 'templates/image-favorites.html',
        link: function(scope, el, attrs, ctrl) {
          scope.ctrl = ctrl;
        }
      };
    })
    .directive('imageList', function() {
      return {
        require: '^imageGallery',
        scope: true,
        templateUrl: 'templates/image-list.html',
        link: function(scope, el, attrs, ctrl) {
          ctrl.setMainImage(scope.images[0]);
          scope.ctrl = ctrl;
        }
      };
    });
})(angular);
