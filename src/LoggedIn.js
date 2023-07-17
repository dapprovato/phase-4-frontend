import React, { useContext } from 'react'
import { UserContext } from './Context/Context'

function LoggedIn() {
    const { user, logout } = useContext(UserContext)

    return (
        <div>
            <h2>Hello, {user.username}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default LoggedIn;
