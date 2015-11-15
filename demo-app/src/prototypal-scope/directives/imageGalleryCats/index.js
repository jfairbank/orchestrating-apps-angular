import { getImages } from '../../imageService';

export default function imageGalleryCats() {
  return {
    restrict: 'E',
    template: '<image-gallery></image-gallery>',
    scope: true,

    controller: function($scope) {
      $scope.images = getImages('cats');
    }
  };
};
