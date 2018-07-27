import React from 'react';
import ReactModal from 'react-modal';
import ScrollLock from 'react-scrolllock';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import styles from '../stylesheets/Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      photos: []
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.fetchPhotos();
    console.log(this.state.photos);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
  
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  fetchPhotos() {
    let option = {}

    axios
      .get('/rooms/:roomID', option)
      .then(result => this.setState({ photos: result.data}))
      .catch(err => console.error(err))
  }
  
  render() {
    return (
      <div className={styles.container}>
        <img onClick={this.handleOpenModal} 
          className={styles.cover} 
          src="https://s3-us-west-1.amazonaws.com/hackreactorlp/assets/10.jpg" 
        />
        <button onClick={this.handleOpenModal} className={styles.pbtn}>View Photos</button>
        <button className={styles.sbtn}><img className={styles.saveicon} src="https://s3-us-west-1.amazonaws.com/hackreactorlp/save.png" /> Save</button>
        <button className={styles.sbtn}><img className={styles.shareicon} src="https://s3-us-west-1.amazonaws.com/hackreactorlp/share.png" /> Share</button>
        <div className={styles.spacer}>
          <ReactModal 
            isOpen={this.state.showModal}
            className={styles.Modal}
            overlayClassName={styles.Overlay}
          >
            <Gallery />
            <button className={styles.close} onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
        {this.state.showModal ? <ScrollLock /> : null}
      </div>
    )
  }
}

export default Header;