import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Config from './config';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {fb_response:{}};
  }
  responseFacebook = (response) => {
    console.log('responseFacebook: ', response);
    this.setState({
      fb_response: response
    });
  }

  componentClicked = (response) => {
    console.log('componentClicked: ');
  }

  render() {
    console.log('[App] render');

    return (
      <div>
        <NavBar
          responseFacebook={this.responseFacebook}
          componentClicked={this.componentClicked}
          fbAppId={Config.fbAppId}
          fbResponse={this.state.fb_response}
        />
      </div>
    );
  }
}

export default App;
