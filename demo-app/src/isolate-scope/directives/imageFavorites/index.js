import template from './template.html';

export default function imageFavorites() {
  return {
    restrict: 'E',
    template: template,

    scope: {
      imageFavorites: '=images',
      triggerUnfavorite: '&onUnfavorite'
    },

    controller: function($scope) {
      $scope.unfavorite = function(image) {
        image.favorited = false;
        $scope.triggerUnfavorite({ image: image });
      };
    }
  };
};
