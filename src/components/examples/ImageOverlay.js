import React, { Component } from 'react';
import '../../css/examples/ImageOverlay.css';

class ImageOverlay extends Component {
  render() {
    return (
      <div className="image-overlay">
        <div className="content-area">

          <div className="main-area">

            <div className="image-banner">
              <img className="contentImage" src="https://learnwebcode.github.io/Web-Design-for-Beginners/squirrel.jpg"/>
              <div className="banner-description">
                <p>This is a brief description of the image. This is a picture of a suicidal squirrel. He is sitting on a train track waiting for the next train to come and take his life.</p>
              </div>

            </div>

          </div> {/* /main-area */}
        </div> {/* /content-area group */}
      </div>
    );
  }
}

export default ImageOverlay;
