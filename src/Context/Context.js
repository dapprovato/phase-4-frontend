import { createContext, useState, useEffect } from "react";

const UserContext = createContext()

function UserProvider( {children} ) {
    const [user, setUser] = useState({username: '', id: '', auth: false})
    
    useEffect(() => {
        fetch("http://localhost:3000/me").then((response) => {
            console.log("response", response)
          if (response.ok) {
            response.json().then((user) => console.log("current user?", user));
          }
        });
      }, []);

    function login(username) {
        setUser((user) => ({
            username: username.username,
            id: username.id,
            auth: true,
        }))
    }

    function logout() {
        setUser((user) => ({
            username: '',
            id: '',
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