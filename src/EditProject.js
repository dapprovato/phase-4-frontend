import React, { useState } from "react";
import Modal from "./Modal"

function EditProject( {project} ) {
  const [editProject, setEditProject] = useState()


  function handleUpdate(project) {
    fetch(`http://localhost:3000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "description": editProject,
      }),
    })
    .then((response) => response.json())
  }
  
    return (
      <div>
          <Modal project={project} handleUpdate={handleUpdate} editProject={editProject} setEditProject={setEditProject} />
      </div>
    )
  }

export default EditProject;