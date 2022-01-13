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
        <a ><img onClick={toggleModal} src={projectImage} alt={project.title}/></a>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
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