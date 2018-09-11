function generateScrollEffect(scrolledElement, callback) {
  //if (!scrolledElement) {return};
  const windowHeight = window.innerHeight;
  const elementYOffset =
    scrolledElement.getBoundingClientRect().top + window.pageYOffset;
  if (window.pageYOffset > elementYOffset - windowHeight) {
    callback();
  }
}

export default generateScrollEffect;
