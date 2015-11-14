import template from './template.html';

export default function imageFavorites() {
  return {
    restrict: 'E',
    template: template,
    scope: {},
    controllerAs: 'ctrl',

    bindToController: {
      imageFavorites: '=images',
      triggerUnfavorite: '&onUnfavorite'
    },

    controller: function($scope) {
      this.unfavorite = function(image) {
        image.favorited = false;
        this.triggerUnfavorite({ image: image });
      };
    }
  };
};
