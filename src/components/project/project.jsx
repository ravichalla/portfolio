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
    },
    {
      picfile: "/images/portfolio/elk.jpg",
      projecttitle: "Elk Stack project",
      projectdescription: "Created Elk using docker compose and viewed  data on Kibana",
      projectlink: "#",
      projecttags: "Docker,Elastic Search,Logstash,Kibana",
      codeurl: ""
    }
  ]
};

export default class Project extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row" />

          <div className="three columns ">
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
                      </div>
                      <div className="link-box">
                        <a target="_blank" href={item.codeurl}>
                          <Octicon
                            style={{ color: "white" }}
                            name="mark-github"
                            mega
                          />
                        <span style={{color:'white'};}> Github  </span>
                        </a>
                        <a target="_blank" href={item.projectlink}>
                          <Octicon
                            style={{ color: "white" }}
                            name="link"
                            mega
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
