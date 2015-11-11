import imageGalleryApp from './imageGalleryApp';
import imageGalleryAppProblematic from './imageGalleryAppProblematic';
import imageGalleryCats from './imageGalleryCats';
import imageGalleryNature from './imageGalleryNature';
import imageGalleryAppFixed from './imageGalleryAppFixed';
import imageGalleryCatsFixed from './imageGalleryCatsFixed';
import imageGalleryNatureFixed from './imageGalleryNatureFixed';
import imageGallery from './imageGallery';
import imageFavorites from './imageFavorites';
import imageList from './imageList';
import mainImage from './mainImage';

const directives = {
  imageGalleryApp, imageGalleryAppProblematic,
  imageGalleryCats, imageGalleryNature, imageGallery,
  imageGalleryAppFixed, imageGalleryCatsFixed, imageGalleryNatureFixed,
  imageFavorites, imageList, mainImage
};

export function bindDirectivesToModule(module) {
  for (var name in directives) {
    module.directive(name, directives[name]);
  }
}
