app.directive('imageList', function() {
  return {
    scope: { images: '=', },
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
