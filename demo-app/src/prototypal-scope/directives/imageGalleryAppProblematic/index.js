import template from './template.html';

export default function imageGalleryAppProblematic() {
  return {
    scope: true,

    link: function(scope) {
      scope.mainImage = {};
      scope.imageFavorites = [];
    },

    template: template
  };
}
