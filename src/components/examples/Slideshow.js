import React from 'react';
import '../../css/examples/Slideshow.css';

const ResponsiveGrid = () => (
  <div className="slideshow">
    <div className="content-area group section">

      <div className="cycle-slideshow" data-cycle-slides=".slide" data-cycle-pause-on-hover="true">

        <span className="cycle-prev">&laquo;</span>
        <span className="cycle-next">&raquo;</span>

        <span className="cycle-pager"></span>

        <div className="slide">
          <img src="https://learnwebcode.github.io/Web-Design-for-Beginners/bee.jpg" alt="Bee" />

          <div className="slide-text">
            <h3>Bee Title Here!</h3>
            <p>This is the caption or descriptive text for the bee slide. <a href="/Slideshow" className="btn-a">Call to action!</a> </p>
          </div>

        </div>

        <div className="slide">
          <img src="https://learnwebcode.github.io/Web-Design-for-Beginners/duck.jpg" alt="Duck" />

          <div className="slide-text">
            <h3>Duck Title Here!</h3>
            <p>This is the caption or descriptive text for the duck slide.</p>
          </div>

        </div>

        <div className="slide">
          <img src="https://learnwebcode.github.io/Web-Design-for-Beginners/squirrel-slideshow.jpg" alt="Squirrel" />

          <div className="slide-text">
            <h3>Squirrel Title Here!</h3>
            <p>This is the caption or descriptive text for the squirrel slide.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default ResponsiveGrid;
