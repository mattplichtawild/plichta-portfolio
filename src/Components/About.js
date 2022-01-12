import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              {/* <p>{bio}</p> */}
              
              <br />

              <p>I started my professional career as a tiger trainer. My creative drive to solve problems led me to starting the WildHeart Foundation, a nonprofit with the goal of improving the lives of wild animals in captivity.</p>
              <p>As a founder and leader, I spearheaded new programs to raise donations and help animals in unique ways. It was through this work that I discovered my love of programming by building <a href="https://www.wildwish.org" target="_blank">WildWish.org</a>, an application to connect donors directly to the animals they are helping.</p> 
              <p>I believe I am in this world for a purpose, and that purpose is to make the world a better place. I achieve this through my work of building products that enrich the lives of animals and people alike.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span><a href="mailto:mattplichtawild@gmail.com">{email}</a></span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
