import React, { useState } from "react"

function CreateTask() {
    const [createTask, setCreateTask] = useState({
        content: "",
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateTask