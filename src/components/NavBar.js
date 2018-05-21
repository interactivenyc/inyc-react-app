import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import '../index.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log('[NavBar initial props] ', props);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    let display = '';

    if (!this.props.fbResponse.id) {
      display = (
        <FacebookLogin
          appId={this.props.fbAppId}
          autoLoad
          fields="name,email,picture"
          onClick={this.props.componentClicked}
          callback={this.props.responseFacebook}
        />);
    } else {
      display = (
        <div>
          <span style={{ color: 'white', backgroundColor: 'black' }}>{this.props.fbResponse.name}</span>
          <img alt="" src={this.props.fbResponse.picture.data.url} />
        </div>
      );
    }

    return (
      <div>
        <div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/addItem">Add Item</a></li>
            <li style={{ float: 'right' }}>
              {display}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  responseFacebook: PropTypes.func.isRequired,
  componentClicked: PropTypes.func.isRequired,
  fbAppId: PropTypes.number.isRequired,
  fbResponse: PropTypes.object.isRequired,
};

export default NavBar;
