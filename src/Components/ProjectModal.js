import React, { useState } from "react";
import Modal from "react-modal";

export default function ProjectModal(data) {
    const [isOpen, setIsOpen] = useState(false);
  
    function toggleModal() {
      setIsOpen(!isOpen);
    }
 
    let project = data.data
    let projectImage = "images/portfolio/" + data.data.image;

    return (
      <>
        {/* Using <a> tag for now until I edit the button CSS for these. I know it goes against a11y practices :( */}
        <a ><img onClick={toggleModal} src={projectImage} alt={project.title}/></a>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel={project.title}
        >
          <img src={projectImage} alt={project.title}/>
            <div>
              <p>{project.description}</p>
              {project.url ? <a href={project.url} target="_blank" rel="noreferrer">{project.url}</a> : ''}
            </div>
          <button onClick={toggleModal}>Close</button>
        </Modal>
        </>
    );
  }