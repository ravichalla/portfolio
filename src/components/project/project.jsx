import React, { Component } from "react";
import Octicon from "react-octicon";

let projectdata = {
  projects: [
    {
      picfile: "/images/portfolio/tictactoe.png",
      projecttitle: "Tic Tac Toe Game",
      projectdescription: "This is a Tic-Tac-Toe game developed in React.",
      projectlink: "http://tictactoegameplay.herokuapp.com",
      projecttags: "React,Web",
      codeurl: "http://www.github.com/ravichalla/tictactoe"
    },
    {
      picfile: "/images/portfolio/wordcount.png",
      projecttitle: "Word Count",
      projectdescription: "Python word counting program.",
      projectlink: "#",
      projecttags: "Python,Word Count",
      codeurl: "https://github.com/ravichalla/wordcount-project"
    }
  ]
};

export default class Project extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row" />
        <div className="twelve columns collapsed">
          <h1>These are Some of My Projects.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projectdata.projects &&
              projectdata.projects.map(item => {
                return (
                  <div
                    className="columns portfolio-item"
                    style={{ width: "320px", height: "320px" }}
                  >
                    <div className="item-wrap">
                      <a href="#">
                        <img
                          src={`${item.picfile}`}
                          className="item-img"
                          style={{ width: "240px", height: "240px" }}
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.projecttitle}</h5>
                            <p>{item.projectdescription}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="link-box">
                      <a target="_blank" href={item.codeurl}>
                        <Octicon
                          style={{ color: "black" }}
                          name="mark-github"
                          mega
                        />
                      </a>
                      <a target="_blank" href={item.projectlink}>
                        <Octicon style={{ color: "black" }} name="link" mega />
                      </a>
                    </div>
                    {/*--------------TODO start------------------------------------------*/}
                    {/* TODO:Commenting this modal class, because on modal popup, project description are showing for first json element correctly showing only. }
                      {/* modal-01 start */}
                    <div id="modal-01" className="popup-modal mfp-hide">
                      <div className="description-box">
                        <p>{item.projectdescription}</p>
                        <span className="categories">
                          <i className="fa fa-tag" />
                          {item.projecttags}
                        </span>
                      </div>
                      <div className="link-box">
                        <a href={"${item.projectlink}"}>Live Link </a>|
                        <a href={"${item.codeurl}"}> Code URL </a> |
                        <a className="popup-modal-dismiss">Close</a>
                      </div>
                    </div>
                    {/* modal-01 End */}
                    {/*-----------------TODO END------------------------*/}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
