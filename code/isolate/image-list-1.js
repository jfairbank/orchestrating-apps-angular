app.directive('imageList', function() {
  return {
    scope: {
      images: '=',
      setMainImage: '&onSetMain',
      triggerFavorite: '&onFavorite'
    },
    templateUrl: 'templates/image-list.html',
    link: function(scope, el, attrs, ctrl) {
      scope.setMainImage({ image: scope.images[0] });
      scope.favorite = function(image) {
        if (!image.favorited) {
          image.favorited = true;
          scope.triggerFavorite({ image: image });
        }
      };
    }
  };
});
