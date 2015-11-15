import { getImages } from '../../imageService';
import template from './template.html';

export default function imageGalleryApp() {
  return {
    restrict: 'E',
    template: template,
    scope: {},
    controllerAs: 'ctrl',

    controller: function() {
      this.catImages = getImages('cats');
      this.natureImages = getImages('nature');
    }
  };
}
