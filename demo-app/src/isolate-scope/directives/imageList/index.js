import template from './template.html';

export default function imageList() {
  return {
    restrict: 'E',
    template: template,

    scope: {
      images: '=',
      setMainImage: '&onSetMain',
      triggerFavorite: '&onFavorite'
    },

    controller: function($scope) {
      $scope.favorite = function(image) {
        if (!image.favorited) {
          image.favorited = true;
          $scope.triggerFavorite({ image: image });
        }
      };
    }
  };
};
