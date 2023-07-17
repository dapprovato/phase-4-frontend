import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
    display: "inline-block",
    width: "80px",
    padding: "12px",
    margin: "30px -100px 5px 250px",
    background: "orange",
    fontSize: "15px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
}

function NavBar() {
    return (
    <div>
        <NavLink
              to="/projects"
              exact
              style={linkStyles}
              activeStyle={{
                background: "darkblue",
              }}
            > 
              Projects       
        </NavLink>
        <NavLink
              to="/tasks"
              exact
              style={linkStyles}
              activeStyle={{
                background: "darkblue",
              }}
            > 
              Tasks       
        </NavLink>
        <NavLink
              to="/"
              exact
              style={linkStyles}
              activeStyle={{
                background: "darkblue",
              }}
            >
              Homepage
        </NavLink>

    </div>
    )
}

export default NavBar;