import React, { useState } from "react"
import CreateProject from "./CreateProject"
import EditProject from "./EditProject"

function Projects( {projects} ) {

  function handleDelete(event) {
        fetch(`http://localhost:3000/projects/${event.target.value}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result.error)
          })
      }

    return (
        <div> 
            <CreateProject />
            {projects.map((project) => {
                return (
                    <div>
                        <div>{project.title}</div>
                        <div>{project.description}</div>
                        <EditProject project={project} />
                        <button onClick={handleDelete} value={project.id}>Delete project?</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects