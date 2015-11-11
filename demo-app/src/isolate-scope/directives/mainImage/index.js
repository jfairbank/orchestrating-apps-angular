import template from './template.html';

export default function mainImage() {
  return {
    scope: {
      mainImage: '=image'
    },

    template: template
  };
};
