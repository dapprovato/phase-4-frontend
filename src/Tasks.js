import React from 'react'
import CreateTask from "./CreateTask"
import EditTask from "./EditTask"

function Tasks( {tasks, projects} ) {

    function handleDelete(event) {
        fetch(`http://localhost:3000/tasks/${event.target.value}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result.error)
          })

          console.log(event.target.value)
      }
    
    return (
        <div>
            <CreateTask projects={projects} />
            {tasks.map((task) => {
                return (
                    <div>
                        {task.content}
                        <button onClick={handleDelete} value={task.id}>Delete task?</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks