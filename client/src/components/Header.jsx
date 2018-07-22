import React from 'react';
import Gallery from './Gallery.jsx';
import styles from '../stylesheets/Header.css'

class Header extends React.Component {
  constructor () {
    super();
    this.state = {
      galleryClicked: false
    }
  }

  handleClick() {
    this.setState({
      galleryClicked: true
    })
  }
  
  render() {
    var {galleryClicked} = this.state;
    return (
      <div className={styles.container}>
        {galleryClicked===true ? <Gallery /> : null}
        <img onClick={() => this.handleClick()} 
          className={styles.cover} 
          src="https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/10.jpg" 
        />
        <button className={styles.btn}>View Photos</button>
      </div>
    )
  }
}

export default Header;