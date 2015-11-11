import template from './template.html';

export default function imageFavorites() {
  return {
    scope: {
      imageFavorites: '=images',
      triggerUnfavorite: '&onUnfavorite'
    },

    template: template,

    link: function(scope) {
      scope.unfavorite = function(image) {
        image.favorited = false;
        scope.triggerUnfavorite({ image: image });
      };
    }
  };
};
