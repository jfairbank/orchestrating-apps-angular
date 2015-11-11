app.directive('imageFavorites', function() {
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
});
