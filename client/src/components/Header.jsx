import React from 'react';
import ReactModal from 'react-modal';
import Gallery from './Gallery.jsx';
import styles from '../stylesheets/Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false 
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
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
        <ReactModal 
           isOpen={this.state.showModal}
           className={styles.gallery}
        >
          <Gallery handleCloseModal={this.handleCloseModal} />
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    )
  }
}

export default Header;