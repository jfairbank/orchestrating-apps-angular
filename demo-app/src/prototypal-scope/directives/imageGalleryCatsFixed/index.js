import { getImages } from '../../imageService';

export default function imageGalleryCatsFixed() {
  return {
    scope: true,

    template: '<image-gallery></image-gallery>',

    link: function(scope) {
      scope.mainImage = {};
      scope.imageFavorites = [];

      scope.images = getImages('cats');
    }
  };
};
