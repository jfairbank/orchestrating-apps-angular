import template from './template.html';

export default function imageFavorites() {
  return {
    scope: {},
    template: template,
    controllerAs: 'ctrl',

    controller: function($scope) {
      this.imageFavorites = [];

      this.unfavorite = function(image) {
        var i = this.imageFavorites.indexOf(image);

        if (i > -1) {
          image.favorited = false;
          this.imageFavorites.splice(i, 1);
        }
      };

      $scope.$on('favorite:image', (e, image) => {
        this.imageFavorites.push(image);
      });
    }
  };
};
