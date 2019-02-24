import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Resume Section
   ================================================== */}
        <section id="resume">
          {/* Education
----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Central Missouri</h3>
                  <p className="info">
                    Masters in Computer Science <span>•</span>{" "}
                    <em className="date">Jan 2019</em>
                  </p>
                  <p>
                    Did different projects and learnt real computer sciene
                    techniques indepth ,so to apply those in real world problem
                    solving and for enterprises.see the portfolio.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              {/*
              <div className="row item">
                <div className="twelve columns">
                  <h3>School of Cool Designers</h3>
                  <p className="info">
                    B.A. Degree in Graphic Design <span>•</span>{" "}
                    <em className="date">March 2003</em>
                  </p>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat
                  </p>
                </div>
</div>{" "}        */}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Education */}
          {/* Work
----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>University Of Central Missouri</h3>
                  <p className="info">
                    AI Lab Assistant and Technical Support<span>•</span>{" "}
                    <em className="date">August 2018 - Present</em>
                  </p>
                  <p>
                    Practical building of latest neural networks and ensemble style of algorithm.
                    Currently working on an app,for tracking the location of shuttle bus, which has users of about 70 people.
                    Responsible for maintaining the WIFI service by using Cisco-Meraki Web app. Manage facilities and equipment usage and provide technical support as needed.
                    Coordinate the tasks , that happen during any events in the university. 
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3> Wright State University</h3>
                  <h3 />
                  <p className="info">
                    Web Developer<span>•</span>{" "}
                    <em className="date">Feb 2018 - Jun 2018</em>
                  </p>
                  <p>
                    Responsible for developing, updating and managing the
                    Knoesis website using Drupal CMS which has monthly 800
                    unique users. • Responsible for making technical
                    documentation for the website • Updating and Upgrading of
                    Drupal site, whenever security update released by Drupal •
                    Make use of Kanban Board, for taking the tasks .Used to
                    attend daily Scrum meeting.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Tata Consultancy Services</h3>
                  <p className="info">
                    Software Engineer <span>•</span>{" "}
                    <em className="date">October 2016 - December 2017</em>
                  </p>
                  <p>
                    Worked with different clients such as Visteon, Johnson
                    Controls.Developed Applications and Software for the
                    clients,for them.Have experience in Agile Scrum methodology
                    and effective implementation of design patterns.The roles
                    and responsiblities include requirement gathering and
                    analysis,come up with business proposals and work
                    estimates.Also designed and developed major modules of the
                    project.Has been coordinated between with different teams
                    for various integration purposes like Jcaps etc.Code
                    analysis and performance optimization.Done enhancements and
                    Change Requests.Gave POC demonstration to client.Deployment
                    and configuration of web applications perfomed.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            <div className="row item">
                <div className="twelve columns">
                  <h3>Ezues Private Limited</h3>
                  <p className="info">
                    Junior Software Engineer<span>•</span>{" "}
                    <em className="date">January 2016 - October 2017</em>
                  </p>
                  <p>
            Developed project related to java and sql as team member in multiple projects related 
                    to PaaS and multi domain areas of finance, ecommerce and electronic sector. 
                    Trained and escalated to research and development team of Ezues R&D
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            {/* main-col end */}
          </div>{" "}
          {/* End Work */}
          {/* Skills
----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>Some of my skills are:</p>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar" style={{ width: "80%" }} />
                    <em>Java</em>
                  </li>
                  <li>
                    <span className="bar" style={{ width: "70%" }} />
                    <em>Python</em>
                  </li>
                  <li>
                    <span className="bar" style={{ width: "70%" }} />
                    <em>JavaScript(React JS,Node JS)</em>
                  </li>
                  <li>
                    <span className="bar" style={{ width: "80%" }} />
                    <em>Containers</em>
                  </li>
                  <li>
                    <span className="bar" style={{ width: "80%" }} />
                    <em>MicroServices</em>
                  </li>
                  <li>
                    <span className="bar" style={{ width: "80%" }} />
                    <em>CI/CD</em>
                  </li>
                  <li>
                    <span className="bar" style={{ width: "80%" }} />
                    <em>Kubernetes & Open Shift</em>
                  </li>
                  <li>
                    <span className="bar" style={{ width: "80%" }} />
                    <em>BPM/Rules</em>
                  </li>
                </ul>
              </div>
              {/* end bars */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End skills */}
        </section>{" "}
        {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
