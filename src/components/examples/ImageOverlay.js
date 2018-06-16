import React from 'react';
import '../../css/examples/ImageOverlay.css';

const ImageOverlay = () => (
  <div className="image-overlay">
    <div className="code-view-link"><a href="https://codepen.io/steve-warren/pen/VdemBg" target="_blank" rel="noopener noreferrer">View the code on codepen.io</a></div>
    <div className="main-area">
      <div className="image-banner">
        <img className="contentImage" src="https://learnwebcode.github.io/Web-Design-for-Beginners/squirrel.jpg" alt="squirrel" />
        <div className="banner-description">
          <p>This is a brief description of the image. This is a picture of a suicidal squirrel.
            He is sitting on a train track waiting for the next train to come and take his
            life.</p>
        </div>
      </div>
    </div> {/* /main-area */}
  </div>
);

export default ImageOverlay;
