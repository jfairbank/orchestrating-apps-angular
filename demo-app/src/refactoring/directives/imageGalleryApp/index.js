import { getImages } from '../../imageService';
import template from './template.html';

export default function imageGalleryApp() {
  return {
    controller: function() {
      this.catImages = getImages('cats');
      this.natureImages = getImages('nature');
    },

    template: template,
    controllerAs: 'ctrl'
  };
}
