// Subcomponent of images
// Needs to toggle images left/right
// Current image is highlighted, other images dimmed
// Current image is in the center of the scroll unless within the first 3/4 images (dynamic rendering)
// Show hide state

import React from 'react';
import styles from '../stylesheets/Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        Hello from Gallery.jsx!
        {/* <div className={styles.modal}>
          <div className={styles.modal-content}>
            <span className={styles.close}>&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Gallery;