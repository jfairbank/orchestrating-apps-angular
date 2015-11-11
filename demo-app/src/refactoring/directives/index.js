import imageGalleryApp from './imageGalleryApp';
import imageGallery from './imageGallery';
import imageFavorites from './imageFavorites';
import imageList from './imageList';
import mainImage from './mainImage';

const directives = {
  imageGalleryApp, imageGallery, imageFavorites, imageList, mainImage
};

export function bindDirectivesToModule(module) {
  for (var name in directives) {
    module.directive(name, directives[name]);
  }
}
