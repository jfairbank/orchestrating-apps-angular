import { getImages } from '../../imageService';
import template from './template.html';

export default function imageGalleryApp() {
  return {
    restrict: 'E',
    template: template,
    scope: {},

    controller: function($scope) {
      $scope.catImages = getImages('cats');
      $scope.natureImages = getImages('nature');
    }
  };
}
