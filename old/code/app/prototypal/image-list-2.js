app.directive('imageList', function() {
  return {
    // ...
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
