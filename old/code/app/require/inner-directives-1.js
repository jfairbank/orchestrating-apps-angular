app.directive('mainImage', function() {
  return {
    require: '^imageGallery',
    // ...
    link: function(scope, el, attrs, ctrl) {
      scope.ctrl = ctrl;
    }
  }
}).directive('imageFavorites', function() {
  return {
    require: '^imageGallery',
    // ...
    link: function(scope, el, attrs, ctrl) {
      scope.ctrl = ctrl;
    }
  };
});
