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
      currentImage: null
    }
  }

  setDefaultImage() {
    let option = {default: true}
    axios.get('/rooms/:roomID', option)
    .then(res => this.setState({currentImage: res.data.url}))
    .catch(err => console.error(err))
  }
  
  render() {
    return (
      <div>
        <img className={styles.img}
          src="https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/10.jpg" 
        />
      </div>
    )
  }
}

export default Gallery;