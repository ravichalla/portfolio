import React, { Component } from "react";
export default class About extends Component {
render() {
return (
<React.Fragment>
   <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
               I am pursuing my Masters from University of Central Missouri in
               Computer Science.I hold an Undergraduate degree from Andhra
               University. I have taken up courses like Advanced
               Algorithms,Advanced Computer Networks,Advanced Database
               Systems,Compiler Design,Advanced Software Engineering,Cloud
               Computing, Artificial Intelligence,Advanced Operating Systems.
               During the coursework, I was involved in development and
               implementation of various projects for the same courses which
               gave me immense knowledge about different new technologies as
               well as gave me exposure and confidence.
            </p>
            <p>
               I worked as web developer in Wright State University, in Knoesis
               department,where I had maintained the profiles of people, their
               web portfolios in server and CRUD operations on website.Also
               perfomed latest security patches for Drupal Content management
               system on Linux server(Ubuntu).
            </p>
            <p>
               I also have around 1.5 years of technical experience in
               application and web development at Tata Consultancy Services for
               Visteon. I have in-depth knowledge and professional experience
               in all phases of the software development life cycle and agile
               methodologies.My objective is to make a long term commitment to
               work in a challenging opportunistic environment where I can
               apply my knowledge as well as learn to enhance my technological,
               leadership and communication skills.
            </p>
            <p>
               Developed project related to java and sql as team member in multiple projects 
               related to PaaS and multi domain areas of finance, ecommerce and electronic sector.
               Trained and escalated to research and development team of Ezues R&D
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                     <span>Ravi Challa</span>
                     <span>
                     <br />
                     USA
                     </span>
                     <br />
                     <span>
                     <a href="ravichalla.herokuapp.com">
                     ravichalla.herokuapp.com
                     </a>
                     </span>
                  </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="" className="button">
                     <i className="fa fa-download" />
                     Resume(Contact me for Updated Resume)
                     </a>
                  </p>
               </div>
            </div>
            {" "}
            {/* end row */}
         </div>
         {" "}
         {/* end .main-col */}
      </div>
   </section>
   {" "}
   {/* About Section End*/}
   {/* Resume Section
   */}
</React.Fragment>
);
}
}
