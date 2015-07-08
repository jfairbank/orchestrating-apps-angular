app.directive('imageFavorites', function() {
  return {
    scope: true,
    templateUrl: 'image-favorites.html',
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
});
