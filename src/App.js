import React, { Component } from 'react';
import TopNav from './components/TopNav';
import StyledTable from './components/examples/StyledTable';
import './css/examples/ImageOverlay.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <TopNav/>

        <div className="content">
          <StyledTable/>
        </div>

      </div>
    );
  }
}

export default App;
