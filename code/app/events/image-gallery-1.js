app.directive('imageGallery', function() {
  return {
    scope: {
      images: '='
    },
    templateUrl: 'templates/image-gallery.html',
    link: function(scope) {
      scope.$on('delegate:set:mainImage', function(e, image) {
        scope.$broadcast('set:mainImage', image);
      });

      scope.$on('delegate:favorite:image', function(e, image) {
        scope.$broadcast('favorite:image', image);
      });
    }
  };
});
