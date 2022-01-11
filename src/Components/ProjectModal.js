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
        <a><img onClick={toggleModal} src={projectImage} /></a>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
        >
          <div>{project.title}</div>
          <img src={projectImage} />
          <button onClick={toggleModal}>Close modal</button>
        </Modal>
        </>
    );
  }