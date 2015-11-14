import template from './template.html';

export default function mainImage() {
  return {
    restrict: 'E',
    template: template,
    scope: {},

    controller: function($scope) {
      $scope.mainImage = {};

      $scope.$on('set:mainImage', function(e, image) {
        $scope.mainImage.src = image.src;
      });
    }
  };
};
