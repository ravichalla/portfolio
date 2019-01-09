import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header/header";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";

import Project from "./components/project/project";

import Contacus from "./components/contactus/contactus";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        {/*<Portfolio />
        <Testimonials />  */}
        <Project />
        <Footer />
      </div>
    );
  }
}

export default App;
