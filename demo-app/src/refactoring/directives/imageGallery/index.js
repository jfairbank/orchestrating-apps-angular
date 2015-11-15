import template from './template.html';

export default function imageGallery() {
  return {
    restrict: 'E',
    template: template,

    scope: {
      images: '='
    },

    controller: function($scope) {
      $scope.imageFavorites = [];

      $scope.favorite = function(image) {
        $scope.imageFavorites.push(image);
      };

      $scope.unfavorite = function(image) {
        var i = $scope.imageFavorites.indexOf(image);

        if (i > -1) {
          $scope.imageFavorites.splice(i, 1);
        }
      };

      $scope.$on('delegate:set:mainImage', function(e, image) {
        $scope.$broadcast('set:mainImage', image);
      });
    }
  };
};
