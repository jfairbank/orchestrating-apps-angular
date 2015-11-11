import template from './template.html';

export default function imageGallery() {
  return {
    scope: {},

    bindToController: {
      images: '='
    },

    template: template,
    controllerAs: 'ctrl',

    controller: function() {
      this.mainImage = {};
      this.imageFavorites = [];

      this.setMain = function(image) {
        this.mainImage.src = image.src;
      };

      this.favorite = function(image) {
        this.imageFavorites.push(image);
      };

      this.unfavorite = function(image) {
        var i = this.imageFavorites.indexOf(image);

        if (i > -1) {
          this.imageFavorites.splice(i, 1);
        }
      };
    }
  };
};
