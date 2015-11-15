import template from './template.html';

export default function imageGallery() {
  return {
    restrict: 'E',
    template: template,
    scope: true
  };
};
