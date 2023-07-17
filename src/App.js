import React, { useState, useEffect, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import { UserContext } from './Context/Context'
import Homepage from "./Homepage"
import Projects from "./Projects"
import Tasks from "./Tasks"

function App() {
  const { user } = useContext(UserContext)
  const [users, setUsers] = useState([])
  const [stateUser, setStateUser] = useState(null)
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/users").then((response) => {
      if (response.ok) {
        response.json().then((user) => setStateUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    console.log("handleLoginUser", user)
    setStateUser(user)
  }

  function handleLogout() {
    setUsers(null)
  }

  return (
    <div className="App">
      <NavBar />
      <div>{user.auth ? "is logged in" : "not logged in"}</div>
      <Routes>
        <Route exact path="/projects" element={<Projects projects={projects} />} />
        <Route exact path="/tasks" element={<Tasks tasks={tasks} />} />
        <Route exact path="/" element={<Homepage onLogin={handleLogin} onLogout={handleLogout} users={users} />} />
      </Routes>
    </div>
  );
}

export default App;