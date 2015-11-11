export default function imageGalleryApp() {
  return {
    scope: true,

    link: function(scope) {
      scope.mainImage = {};
      scope.imageFavorites = [];
    },

    template: '<image-gallery-cats></image-gallery-cats>'
  };
}
