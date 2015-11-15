import template from './template.html';

export default function imageGallery() {
  return {
    restrict: 'E',
    template: template,

    scope: {
      images: '='
    },

    controller: function($scope) {
      $scope.mainImage = {};
      $scope.imageFavorites = [];

      $scope.setMain = function(image) {
        $scope.mainImage.src = image.src;
      };

      $scope.favorite = function(image) {
        $scope.imageFavorites.push(image);
      };

      $scope.unfavorite = function(image) {
        var i = $scope.imageFavorites.indexOf(image);

        if (i > -1) {
          $scope.imageFavorites.splice(i, 1);
        }
      };
    }
  };
};
