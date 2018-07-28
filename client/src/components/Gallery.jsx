// Subcomponent of images
// Needs to toggle images left/right
// Current image is highlighted, other images dimmed
// Current image is in the center of the scroll unless within the first 3/4 images (dynamic rendering)
// Show hide state
// Will have subcomponent thumbnail gallery

import React from 'react';
import axios from 'axios';
import styles from '../stylesheets/Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // photos: [],
      // currentImage: 'https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/10.jpg',
      // currentImage: 'photos[0].url
    }
  }

  componentDidMount() {
    this.setDefaultImage();
  }
  
  render() {
    return (
      <div>
        <img className={styles.img}
          src={this.props.currentImage}
        />
        <button className={styles.close} onClick={this.props.closeModal}>Close Modal</button>

      </div>
    )
  }
}

export default Gallery;