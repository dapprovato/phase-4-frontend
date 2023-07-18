import React, { useContext } from 'react'
import { UserContext } from './Context/Context'
import SignUp from "./SignUp"
import Login from "./Login"
import Logout from "./Logout"
import LoggedIn from "./LoggedIn"
import LoggedOut from "./LoggedOut"

function Homepage( {onLogin, onLogout} ) {
    const { user, login } = useContext(UserContext)

    function onLoginTwo() {
    }

    console.log("user", user)
    
    return (
        <div>
            {/* <Login onLogin={login} /> */}
            {/* <Logout onLogout={onLogout} /> */}
            {user.auth ? <LoggedIn /> : <LoggedOut />}
            {/* <SignUp />  */}
        </div>
    )
}

export default Homepage