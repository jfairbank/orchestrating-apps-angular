import template from './template.html';

export default function imageGalleryAppProblematic() {
  return {
    restrict: 'E',
    template: template,
    scope: true,

    controller: function($scope) {
      $scope.mainImage = {};
      $scope.imageFavorites = [];
    }
  };
}
