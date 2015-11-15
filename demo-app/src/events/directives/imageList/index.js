import template from './template.html';

export default function imageList() {
  return {
    restrict: 'E',
    template: template,
    scope: {},
    controllerAs: 'ctrl',

    bindToController: {
      images: '='
    },

    controller: function($scope) {
      this.setMainImage = function(image) {
        $scope.$emit('delegate:set:mainImage', image);
      };

      this.favorite = function(image) {
        if (!image.favorited) {
          image.favorited = true;
          $scope.$emit('delegate:favorite:image', image);
        }
      };

      this.setMainImage(this.images[0]);
    }
  };
};
