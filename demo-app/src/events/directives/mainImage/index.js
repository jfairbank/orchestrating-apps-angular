import template from './template.html';

export default function mainImage() {
  return {
    scope: {},
    template: template,
    controllerAs: 'ctrl',

    controller: function($scope) {
      this.mainImage = {};

      $scope.$on('set:mainImage', (e, image) => {
        this.mainImage.src = image.src;
      });
    }
  };
};
