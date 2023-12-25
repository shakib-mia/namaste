const handleSlideChange = (direction, containerId) => {
  // direction is the id of the buttons with arrows
  // container id is the id of the slider container

  document.querySelector(`#${containerId} .owl-${direction}`).click();
};
