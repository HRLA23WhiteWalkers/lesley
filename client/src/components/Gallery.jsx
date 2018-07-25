// Subcomponent of images
// Needs to toggle images left/right
// Current image is highlighted, other images dimmed
// Current image is in the center of the scroll unless within the first 3/4 images (dynamic rendering)
// Show hide state
// Will have subcomponent thumbnail gallery

import React from 'react';
import styles from '../stylesheets/Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div>
        HIIII
        <button onClick={this.props.handleCloseModal}>Close Modal</button>
      </div>
    )
  }
}

export default Gallery;