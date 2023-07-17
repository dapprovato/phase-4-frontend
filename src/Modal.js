import React, { useState } from 'react'

function Modal({ project, handleUpdate, editProject, setEditProject }) {
    const [modalToggle, setModalToggle] = useState(false)

    function handleChange(event) {
        setEditProject(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        handleUpdate(project)
    }

    function handleClick() {
        setModalToggle(!modalToggle)
    }

    function handleChange(event) {
        setEditProject(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleUpdate(project)
    }

    return (
        <div>
            <button className="modal-btn" onClick={handleClick}>Edit Modal</button>
            <div> 
                {modalToggle&& (
                <div className="overlay">
                    <div className="custom-modal"></div>
                    <h3 className="modal-text">please update project description</h3>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <input type="text" id="description" placeholder="description" value={editProject} onChange={handleChange}/>
                            <button>Submit</button>
                            <button onClick={handleClick}>Close</button>
                        </form>
                </div>)}
            </div>
        </div>
    )
}

export default Modal