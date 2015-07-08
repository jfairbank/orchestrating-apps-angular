app.directive('imageGallery', function() {
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
});
