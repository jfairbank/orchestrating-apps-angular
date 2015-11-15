import template from './template.html';

export default function mainImage() {
  return {
    restrict: 'E',
    template: template,
    scope: {},
    controllerAs: 'ctrl',

    bindToController: {
      mainImage: '=image'
    },

    controller: function() {}
  };
};
