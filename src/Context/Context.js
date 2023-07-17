import { createContext, useState } from "react";

const UserContext = createContext()

function UserProvider( {children} ) {
    const [user, setUser] = useState({username: '', auth: true})
    
    //this is where we'll fetch the /me frm the backend

    function login(username) {
        setUser((user) => ({
            username: username.username,
            auth: true,
        }))
    }

    function logout() {
        setUser((user) => ({
            username: '',
            auth: false,
        }))
    }
    
    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
        )
}

export { UserProvider, UserContext }