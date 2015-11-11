app.directive('imageFavorites', function() {
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
});
