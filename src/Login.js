import React, { useState } from "react";

function Login( {onLogin} ) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log("username", username)
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        })
        .then((result) => result.json())
        .then((user) => onLogin(user))
    }
    
    return (
        <div>
            <form className="signForm" onSubmit={handleSubmit}>
                <input type="text" id="username" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <input type="password" id="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <button className="button" type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login;