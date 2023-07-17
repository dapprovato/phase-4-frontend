import React, { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then((result) => result.json())
            console.log("hello")
            // .then(onLogin)
    }

    return (
        <div>
            <form className="signForm" onSubmit={handleSubmit}>
                <input type="text" id="username" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <input type="password" id="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <button className="button" type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUp;