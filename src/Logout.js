import React, { useState } from "react";

function Logout( {onLogout} ) {

    function handleLogout() {
        fetch("http://localhost:3000/logout", {
            method: "DELETE",
        })
        .then(() => onLogout())
    }
    
    return (
        <div>
                {/* <button className="button" type="submit">Log out?</button> */}
        </div>
    )
}

export default Logout;