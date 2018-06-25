import React from 'react';
import Slider from 'react-slick';
import '../../css/examples/Slideshow.css';
import './slick/slick.css';
import './slick/slick-theme.css';

class Slideshow extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slideshow">

        <Slider {...settings}>
          <div>
            <div className="slide">
              <img src="https://learnwebcode.github.io/Web-Design-for-Beginners/bee.jpg" alt="Bee" />

              <div className="slide-text">
                <h3>Bee Title Here!</h3>
                <p>This is the caption or descriptive text for the bee slide. <a href="/Slideshow" className="btn-a">Call to action!</a> </p>
              </div>

            </div>
          </div>
          <div>
            <div className="slide">
              <img src="https://learnwebcode.github.io/Web-Design-for-Beginners/duck.jpg" alt="Duck" />

              <div className="slide-text">
                <h3>Duck Title Here!</h3>
                <p>This is the caption or descriptive text for the duck slide.</p>
              </div>

            </div>
          </div>
          <div>
            <div className="slide">
              <img src="https://learnwebcode.github.io/Web-Design-for-Beginners/squirrel-slideshow.jpg" alt="Squirrel" />

              <div className="slide-text">
                <h3>Squirrel Title Here!</h3>
                <p>This is the caption or descriptive text for the squirrel slide.</p>
              </div>

            </div>
          </div>
        </Slider>

      </div>
    );
  };

};

export default Slideshow;
