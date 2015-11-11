import template from './template.html';

export default function mainImage() {
  return {
    scope: {},

    bindToController: {
      mainImage: '=image'
    },

    template: template,
    controllerAs: 'ctrl',
    controller: function() {}
  };
};
