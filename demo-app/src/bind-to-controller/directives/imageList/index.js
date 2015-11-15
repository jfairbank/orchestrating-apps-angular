import template from './template.html';

export default function imageList() {
  return {
    restrict: 'E',
    template: template,
    scope: {},
    controllerAs: 'ctrl',

    bindToController: {
      images: '=',
      setMainImage: '&onSetMain',
      triggerFavorite: '&onFavorite'
    },

    controller: function() {
      this.favorite = function(image) {
        if (!image.favorited) {
          image.favorited = true;
          this.triggerFavorite({ image: image });
        }
      };
    }
  };
};
