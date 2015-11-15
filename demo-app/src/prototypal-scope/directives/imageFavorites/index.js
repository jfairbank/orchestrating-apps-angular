import template from './template.html';

export default function imageFavorites() {
  return {
    restrict: 'E',
    template: template,
    scope: true,

    controller: function($scope) {
      $scope.unfavorite = function(image) {
        var i = $scope.imageFavorites.indexOf(image);

        if (i > -1) {
          image.favorited = false;
          $scope.imageFavorites.splice(i, 1);
        }
      };
    }
  };
};
