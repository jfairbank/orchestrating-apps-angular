import template from './template.html';

export default function imageList() {
  return {
    scope: {},

    bindToController: {
      images: '=',
      setMainImage: '&onSetMain',
      triggerFavorite: '&onFavorite'
    },

    template: template,
    controllerAs: 'ctrl',

    controller: function() {
      this.setMainImage({
        image: this.images[0]
      });

      this.favorite = function(image) {
        if (!image.favorited) {
          image.favorited = true;
          this.triggerFavorite({ image: image });
        }
      };
    }
  };
};
