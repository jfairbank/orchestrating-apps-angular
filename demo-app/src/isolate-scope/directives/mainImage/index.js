import template from './template.html';

export default function mainImage() {
  return {
    restrict: 'E',
    template: template,

    scope: {
      mainImage: '=image'
    }
  };
};
