import React from 'react';
import ReactModal from 'react-modal';
import ScrollLock from 'react-scrolllock';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import styles from '../stylesheets/Header.css'

ReactModal.setAppElement('#app')

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showModal: false,
      currentImage: '',
      headerImage: ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  async componentDidMount() {
    var axiosInstance = axios.get('/api/rooms/1')
    try {
      let res = await axiosInstance
      this.setState({
        photos: res.data,
        headerImage: res.data[0].url,
        currentImage: res.data[0].url
      })
    } catch (err) {
      console.error(err)
    }
    console.log(this.state.headerImage)
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
  
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  
  render() {
    return (
      <div className={styles.container}>
        <img onClick={this.handleOpenModal} 
          className={styles.cover} 
          src={this.state.headerImage}
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
            <button className={styles.close} onClick={this.handleCloseModal}>Close Modal</button>
            <Gallery 
              photos={this.state.photos} 
              currentImage={this.state.currentImage}
              closeModal={this.handleCloseModal}
             />
             <button className={styles.close} onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
        {this.state.showModal ? <ScrollLock /> : null}
      </div>
    )
  }
}

export default Header;