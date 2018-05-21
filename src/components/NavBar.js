import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import '../index.css';

class NavBar extends Component {
  constructor(props) {
      super(props);
      console.log('[NavBar initial props] ', props);
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/addItem">Add Item</a></li>
            <li style={{float:'right'}}>
              <FacebookLogin
               appId={this.props.fbid}
               autoLoad={true}
               fields="name,email,picture"
               onClick={this.props.componentClicked}
               callback={this.props.responseFacebook}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

NavBar.propTypes = {
  responseFacebook: PropTypes.func,
  componentClicked: PropTypes.func,
  fbid: PropTypes.number
}

export default NavBar;
