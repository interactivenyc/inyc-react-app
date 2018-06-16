import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import TopNav from './components/TopNav';
import Home from './components/Home';

// ALL EXAMPLE FILES HERE
import StyledTable from './components/examples/StyledTable';
import ImageOverlay from './components/examples/ImageOverlay';
import StyledForm from './components/examples/StyledForm';
import DropdownMenu from './components/examples/DropdownMenu';
import ResponsiveGrid from './components/examples/ResponsiveGrid';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <div>
              <TopNav/>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/StyledTable" component={StyledTable} />
                <Route path="/StyledForm" component={StyledForm} />
                <Route path="/ImageOverlay" component={ImageOverlay} />
                <Route path="/DropdownMenu" component={DropdownMenu} />
                <Route path="/ResponsiveGrid" component={ResponsiveGrid} />
              </div>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
