import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import TopNav from './components/TopNav';
import Home from './components/Home';
import './App.css';

// ALL EXAMPLE FILES HERE
import StyledTable from './components/examples/StyledTable';
import ImageOverlay from './components/examples/ImageOverlay';
import StyledForm from './components/examples/StyledForm';


class App extends Component {
  render() {
    return (
      <div className="App">

        <TopNav/>

        <div className="content">
          <Router>
              <div>
                <Route exact path="/" component={StyledForm} />
                <Route path="/StyledTable" component={StyledTable} />
                <Route path="/ImageOverlay" component={ImageOverlay} />
              </div>
            </Router>
        </div>

      </div>
    );
  }
}

export default App;
