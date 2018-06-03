import React, { Component } from 'react';

class ImageOverlay extends Component {
  render() {
    return (
      <div className="ImageOverlay">
        <div className="content-area group">

          <div className="main-area">
            <p>This is the main area (or column). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="image-banner">
              <img className="contentImage" src="https://learnwebcode.github.io/Web-Design-for-Beginners/squirrel.jpg"/>
              <div className="banner-description">
                <p>This is a brief description of the image. This is a picture of a suicidal squirrel. He is sitting on a train track waiting for the next train to come and take his life.</p>
              </div>

            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div> {/* /main-area */}
        </div> {/* /content-area group */}
      </div>
    );
  }
}

export default ImageOverlay;
