import template from './template.html';

export default function imageFavorites() {
  return {
    scope: {},
    template: template,
    controllerAs: 'ctrl',

    bindToController: {
      imageFavorites: '=images',
      triggerUnfavorite: '&onUnfavorite'
    },

    controller: function() {
      this.unfavorite = function(image) {
        image.favorited = false;
        this.triggerUnfavorite({ image: image });
      };
    }
  };
};
