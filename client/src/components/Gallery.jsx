// Subcomponent of images
// Needs to toggle images left/right
// Current image is highlighted, other images dimmed
// Current image is in the center of the scroll unless within the first 3/4 images (dynamic rendering)
// Show hide state

import React from 'react';

class Gallery extends React.Component {
  constructor () {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        Hello from Gallery.jsx!
      </div>
    )
  }
}

export default Gallery;