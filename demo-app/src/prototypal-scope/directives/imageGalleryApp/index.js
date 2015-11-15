export default function imageGalleryApp() {
  return {
    restrict: 'E',
    template: '<image-gallery-cats></image-gallery-cats>',
    scope: true,

    controller: function($scope) {
      $scope.mainImage = {};
      $scope.imageFavorites = [];
    }
  };
}
