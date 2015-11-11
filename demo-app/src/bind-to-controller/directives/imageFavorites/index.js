import template from './template.html';

export default function imageFavorites() {
  return {
    scope: {},

    bindToController: {
      imageFavorites: '=images',
      triggerUnfavorite: '&onUnfavorite'
    },

    template: template,
    controllerAs: 'ctrl',

    controller: function() {
      this.unfavorite = function(image) {
        image.favorited = false;
        this.triggerUnfavorite({ image: image });
      };
    }
  };
};
