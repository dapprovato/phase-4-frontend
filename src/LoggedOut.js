import React, { useContext, useState } from 'react'
import { UserContext } from './Context/Context'
import SignUp from './SignUp'
import Login from './Login'

function LoggedOut() {
    const { login } = useContext(UserContext)
    const [username, setUsername] = useState()

    return (
        <div>
            <h2>Please log in to view your current projects</h2>
            {/* <button onClick={() => login(username)}>Log in</button> */}
            <Login onLogin={login}/>
            <SignUp />
        </div>
    )
}
export default LoggedOut;
