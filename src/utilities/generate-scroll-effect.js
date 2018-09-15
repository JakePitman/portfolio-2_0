function generateScrollEffect(scrolledElement, callback) {
  //if (!scrolledElement) {return};
  const windowHeight = window.innerHeight;
  //get Y position of scrolledElement
  const elementYOffset =
    scrolledElement.getBoundingClientRect().top + window.pageYOffset;
  //run the callback if scrolledElement reaches the bottom of the screen
  if (window.pageYOffset > elementYOffset - windowHeight) {
    callback();
  }
}

export default generateScrollEffect;
