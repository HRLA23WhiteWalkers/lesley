import React from 'react';
import Gallery from './Gallery.jsx';
import styles from '../stylesheets/Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryClicked: false,
    }
    this.onCloseRequest = this.onCloseRequest.bind(this)
  }

  handleClick() {
    this.setState({
      galleryClicked: true
    })
  }

  onCloseRequest() {
  
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
        <button className={styles.pbtn}>View Photos</button>
        <button className={styles.sbtn}><img className={styles.saveicon} src="https://s3-us-west-1.amazonaws.com/hackreactorlp/save.png" /> Save</button>
        <button className={styles.sbtn}><img className={styles.shareicon} src="https://s3-us-west-1.amazonaws.com/hackreactorlp/share.png" /> Share</button>
      </div>
    )
  }
}

export default Header;