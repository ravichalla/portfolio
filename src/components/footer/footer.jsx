import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/* footer
   ================================================== */}
        <footer>
          <section id="footer">
            <div className="row">
              <div className="twelve columns">
                {/*
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
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
                <li>
                  <a href="#">
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
              */}
                <ul className="copyright">
                  <li style={{ color: "white" }}>© Copyright Ravi Challa</li>
                </ul>
              </div>
            </div>
          </section>
        </footer>
        {/* Footer End*/}
      </React.Fragment>
    );
  }
}
