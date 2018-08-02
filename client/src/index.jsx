import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';

class Photos extends React.Component {
  constructor() {
    super()
    this.state ={}
  }

  render () {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<Photos />, document.getElementById('photos'));