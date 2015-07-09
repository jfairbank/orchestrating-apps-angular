app.directive('imageList', function() {
  return {
    scope: true,
    templateUrl: 'image-list.html',
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
