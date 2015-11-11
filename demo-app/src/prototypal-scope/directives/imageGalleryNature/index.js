import { getImages } from '../../imageService';

export default function imageGalleryNature() {
  return {
    scope: true,

    template: '<image-gallery></image-gallery>',

    link: function(scope) {
      scope.images = getImages('nature');
    }
  };
};
