import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Config from '../config';
import '../css/Login.css';

class Login extends Component {
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

  render() {

    let display = '';

    if (!this.state.fb_response.id) {
      display = (
        <div className="fb_login">
          <FacebookLogin
            appId={Config.fbAppId}
            autoLoad
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
        </div>
      )
    } else {
      display = (
        <div>
          <span className="fb_name">{this.state.fb_response.name}</span>
          <span className="fb_image"><img alt="" src={this.state.fb_response.picture.data.url} /></span>
        </div>
      )
    }


    return (
      <div className="login">
        {display}
      </div>

    );
  }
}

export default Login;
