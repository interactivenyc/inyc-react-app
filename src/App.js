import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Config from './config';
import Home from './components/Home';
import Profile from './components/Profile';
import AddItem from './components/AddItem';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fb_response: {} };
  }

  responseFacebook = (response) => {
    console.log('responseFacebook: ', response);
    this.setState({
      fb_response: response,
    });
  }

  componentClicked = (response) => {
    console.log('componentClicked: ');
  }

  render() {
    console.log('[App] render');

    return (
      <div>

        <div>
          <NavBar
            responseFacebook={this.responseFacebook}
            componentClicked={this.componentClicked}
            fbAppId={Config.fbAppId}
            fbResponse={this.state.fb_response}
          />
        </div>

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/addItem" component={AddItem} />
          </div>
        </Router>
        
      </div>

    );
  }
}

export default App;
