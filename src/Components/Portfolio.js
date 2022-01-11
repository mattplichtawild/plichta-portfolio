import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import ProjectModal from "./ProjectModal"

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map( (project) => {
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <ProjectModal data={project} />
          </div>
        </div>
      )
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Previous works and projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
