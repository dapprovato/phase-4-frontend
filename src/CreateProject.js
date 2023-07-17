import React, { useState } from "react"

function CreateProject() {
    const [createProject, setCreateProject] = useState({
        title: "",
        description: "",
    })

    function onSubmit(createProject) {
        setCreateProject([createProject])
        fetch("http://localhost:3000/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createProject)
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(createProject)
        setCreateProject({
            title: "",
            description: ""
        })
    }

    function handleChange(event) {
        setCreateProject({
            ...createProject,
            [event.target.id]: event.target.value
        })
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input type="text" id="title" placeholder="title" value={createProject.title} onChange={handleChange} />
                <input type="text" id="description" placeholder="description" value={createProject.description} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateProject