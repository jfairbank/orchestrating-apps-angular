import template from './template.html';

export default function imageList() {
  return {
    scope: {
      images: '=',
      setMainImage: '&onSetMain',
      triggerFavorite: '&onFavorite'
    },

    template: template,

    link: function(scope, el, attrs, ctrl) {
      scope.setMainImage({
        image: scope.images[0]
      });

      scope.favorite = function(image) {
        if (!image.favorited) {
          image.favorited = true;
          scope.triggerFavorite({ image: image });
        }
      };
    }
  };
};
