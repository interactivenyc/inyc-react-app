import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

class NavBar extends Component {
  constructor(props) {
      super(props);
      console.log('[NavBar initial props] ', props);
  }

  render() {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">Disabled</a>
          </li>
          <li>
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
    )
  }
}

// NavBar.propTypes = {
//   responseFacebook: PropTypes.function.isRequired,
//   componentClicked: PropTypes.function.isRequired,
//   fbid: PropTypes.number
// }

export default NavBar;
