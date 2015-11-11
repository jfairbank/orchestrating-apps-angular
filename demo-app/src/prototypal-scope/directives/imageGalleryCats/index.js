import { getImages } from '../../imageService';

export default function imageGalleryCats() {
  return {
    scope: true,

    template: '<image-gallery></image-gallery>',

    link: function(scope) {
      scope.images = getImages('cats');
    }
  };
};
