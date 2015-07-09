app.directive('mainImage', function() {
  return {
    scope: {},
    templateUrl: 'templates/main-image.html',
    link: function(scope) {
      scope.mainImage = {};

      scope.$on('set:mainImage', function(e, image) {
        scope.mainImage.src = image.src;
      });
    }
  }
});
