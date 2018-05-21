import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './components/NavBar'

const fbid = 144998123023968;

class App extends Component {


  responseFacebook = (response) => {
    console.log('responseFacebook');
    console.log(response);
    this.setState({
      fb_response: response
    });
  }

  componentClicked = (response) => {
    console.log('componentClicked');
    console.log(this.state.fb_response.id);
  }

  render() {
    return (
      <div>
        <NavBar
          responseFacebook={this.responseFacebook}
          componentClicked={this.componentClicked}
          fbid={fbid}
        />

      </div>
    );
  }
}

export default App;
