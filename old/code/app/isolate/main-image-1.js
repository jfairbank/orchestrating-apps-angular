app.directive('mainImage', function() {
  return {
    scope: {
      mainImage: '=image'
    },
    templateUrl: 'templates/main-image.html'
  }
});
