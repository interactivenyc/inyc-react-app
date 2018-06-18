import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/examples/ResponsiveGrid.css';

const ResponsiveGrid = () => (
  <div className="responsive-grid">
    <div className="code-view-link"><a href="https://codepen.io/learnwebcode/pen/BmWrwM?editors=1100" target="_blank" rel="noopener noreferrer">View the code on codepen.io</a></div>

    <header className="section">

      <div className="container">
        <h1>Website Title</h1>
        <p className="hide-small">Website slogan included here.</p>

        <nav className="site-nav">
          <ul className="group">
            <li><Link to="/ResponsiveGrid">Home</Link></li>
            <li><Link to="/ResponsiveGrid">About</Link></li>
            <li><Link to="/ResponsiveGrid">Portfolio</Link></li>
            <li className="hide-small"><Link to="/ResponsiveGrid">FAQs</Link></li>
            <li className="hide-small"><Link to="/ResponsiveGrid">Links</Link></li>
            <li><Link to="/ResponsiveGrid">Contact Us</Link></li>
          </ul>
        </nav>
      </div> {/* container */}

    </header>

    <div className="content-area group section">

      <div className="container">

        <div className="row">

          <div className="col col-md-8 push-down-sm">

            <h2>Welcome to the page!</h2> {/* row  */}
            <div className="row">

              <div className="col col-sm-6 col-lg-3">

                <div className="box-a">
                  <p>Key feature 1</p>
                </div> {/* /box-a  */}

              </div> {/* /col  */}

              <div className="col col-sm-6 col-lg-3">

                <div className="box-a">
                  <p>Key feature 2</p>
                </div> {/* /box-a  */}

              </div> {/* /col  */}

              <div className="col col-sm-6 col-lg-3">

                <div className="box-a">
                  <p>Key feature 3</p>
                </div> {/* /box-a  */}

              </div>{/* /col  */}

              <div className="col col-sm-6 col-lg-3">
                <div className="box-a">
                  <p>Key feature 4</p>
                </div> {/* /box-a  */}

              </div> {/* /col  */}

            </div> {/* /row  */}

            <div className="row">

              <div className="col col-xs-6">
                <img src="https://learnwebcode.github.io/Web-Design-for-Beginners/bird.jpg" alt="image1" />
              </div> {/* /col  */}

              <div className="col col-xs-6">
                <img src="https://learnwebcode.github.io/Web-Design-for-Beginners/squirrel.jpg" alt="image2" />
              </div> {/* /col  */}

            </div> {/* /row  */}

          </div> {/* /col  */}

          <div className="col col-md-4 sidebar">
            <h3>Sidebar Heading</h3>
            <p>Sidebar Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.</p>

            <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod.</p>
          </div> {/* /col  */}

        </div> {/* /row  */}

      </div> {/* /container  */}

    </div>

  </div>
);

export default ResponsiveGrid;
