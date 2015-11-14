import template from './template.html';

export default function imageList() {
  return {
    restrict: 'E',
    template: template,

    scope: {
      images: '=',
      triggerFavorite: '&onFavorite'
    },

    controller: function($scope) {
      $scope.setMainImage = function(image) {
        $scope.$emit('delegate:set:mainImage', image);
      };

      $scope.favorite = function(image) {
        if (!image.favorited) {
          image.favorited = true;
          $scope.triggerFavorite({ image: image });
        }
      };
    }
  };
};
