import template from './template.html';

export default function imageFavorites() {
  return {
    scope: true,

    template: template,

    link: function(scope) {
      scope.unfavorite = function(image) {
        var i = scope.imageFavorites.indexOf(image);

        if (i > -1) {
          image.favorited = false;
          scope.imageFavorites.splice(i, 1);
        }
      };
    }
  };
};
