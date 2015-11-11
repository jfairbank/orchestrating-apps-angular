function createImage(src, text) {
  return { src, text, favorited: false };
}

const images = {
  cats: [
    createImage('../images/cats/cats-q-c-640-480-3.jpg',  'Cat 1'),
    createImage('../images/cats/cats-q-c-640-480-5.jpg',  'Cat 2'),
    createImage('../images/cats/cats-q-c-640-480-9.jpg',  'Cat 3'),
    createImage('../images/cats/cats-q-c-640-480-10.jpg', 'Cat 4')
  ],

  nature: [
    createImage('../images/nature/nature-q-c-640-480-3.jpg', 'Nature 1'),
    createImage('../images/nature/nature-q-c-640-480-5.jpg', 'Nature 2'),
    createImage('../images/nature/nature-q-c-640-480-7.jpg', 'Nature 3'),
    createImage('../images/nature/nature-q-c-640-480-9.jpg', 'Nature 4')
  ]
};

export function getImages(key) {
  return images[key];
}
