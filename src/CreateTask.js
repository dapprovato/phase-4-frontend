import React, { useState } from "react"

function CreateTask( {projects} ) {
    const [createTask, setCreateTask] = useState({
        content: "",
    })

    const projectSelection = projects.map((project) => {
        return <option value={project.id}>{project.title}</option>
    })

    function onSubmit(createTask) {
        // setCreateTask([createTask])
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createTask)
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(createTask)
        setCreateTask({
            content: "",
        })
        console.log("hi")
    }

    function handleChange(event) {
        setCreateTask({
            ...createTask,
            [event.target.id]: event.target.value
        })
        console.log("jolly", createTask)
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input type="text" id="content" placeholder="add task" value={createTask.content} onChange={handleChange} />
                <select>
                    <option value={null}>Add to project</option>
                    {projectSelection}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateTask