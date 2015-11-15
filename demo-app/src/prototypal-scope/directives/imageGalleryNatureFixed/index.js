import { getImages } from '../../imageService';

export default function imageGalleryNatureFixed() {
  return {
    restrict: 'E',
    template: '<image-gallery></image-gallery>',
    scope: true,

    controller: function($scope) {
      $scope.mainImage = {};
      $scope.imageFavorites = [];

      $scope.images = getImages('nature');
    }
  };
};
