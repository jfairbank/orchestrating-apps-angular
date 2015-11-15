import template from './template.html';

export default function imageList() {
  return {
    restrict: 'E',
    template: template,
    scope: true,

    controller: function($scope) {
      $scope.setMainImage = function(image) {
        $scope.mainImage.src = image.src;
      };

      $scope.favorite = function(image) {
        if (!image.favorited) {
          image.favorited = true;
          $scope.imageFavorites.push(image);
        }
      };
    }
  };
};
