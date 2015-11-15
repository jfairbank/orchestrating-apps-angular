import template from './template.html';

export default function imageGallery() {
  return {
    restrict: 'E',
    template: template,
    scope: {},
    controllerAs: 'ctrl',

    bindToController: {
      images: '='
    },

    controller: function($scope) {
      $scope.$on('delegate:set:mainImage', function(e, image) {
        $scope.$broadcast('set:mainImage', image);
      });

      $scope.$on('delegate:favorite:image', function(e, image) {
        $scope.$broadcast('favorite:image', image);
      });
    }
  };
};
