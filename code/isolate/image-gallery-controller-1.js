controller: function() {
  this.mainImage = {};
  this.imageFavorites = [];

  this.setMainImage = function(image) {
    this.mainImage.src = image.src;
  };

  this.favorite = function(image) {
    if (!image.favorited) {
      image.favorited = true;
      this.imageFavorites.push(image);
    }
  };

  this.unfavorite = function(image) {
    var i = this.imageFavorites.indexOf(image);
    if (i > -1) {
      image.favorited = false;
      this.imageFavorites.splice(i, 1);
    }
  };
}
