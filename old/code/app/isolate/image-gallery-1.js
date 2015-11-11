app.directive('imageGallery', function() {
  return {
    scope: {
      images: '='
    },
    templateUrl: 'templates/image-gallery.html',
    link: function(scope) {
      // ...
    }
  };
});
