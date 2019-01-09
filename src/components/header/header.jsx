import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Experience
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
              {/*
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
              */}
            </ul>{" "}
            {/* end #nav */}
          </nav>{" "}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Ravi Challa.</h1>
              <h3>
                I'm an USA based <span>Software Engineer</span>, trying to
                support open-source sofware with also skills of{" "}
                <span>DevOps</span>. Let's{" "}
                <a className="smoothscroll" href="#about">
                  start scrolling
                </a>
                and learn more{" "}
                <a className="smoothscroll" href="#about">
                  about me
                </a>
                .
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100006144013008"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ravi_challa_" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://plus.google.com/u/0/+RaviChalla"
                    target="_blank"
                  >
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ravishankarchalla/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>

                {/* Commented Insta & Dribble
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                */}

                <li>
                  <a href="skype:ravichalla951?chat">
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
        {/* Header End */}
      </React.Fragment>
    );
  }
}
