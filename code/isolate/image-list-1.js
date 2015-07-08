app.directive('imageList', function() {
  return {
    require: '^imageGallery',
    scope: true,
    templateUrl: 'templates/image-list.html',
    link: function(scope, el, attrs, ctrl) {
      ctrl.setMainImage(scope.images[0]);
      scope.ctrl = ctrl;
    }
  };
});
