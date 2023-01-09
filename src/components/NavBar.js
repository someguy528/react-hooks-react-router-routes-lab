import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <NavLink className="navbar" to="/" >
      Home
    </NavLink>
    <NavLink className="navbar" to="/movies" >
      Movies
    </NavLink>
    <NavLink className="navbar" to="/directors" >
      Directors
    </NavLink>
    <NavLink className="navbar" to="/actors" >
      Actors
    </NavLink>
    </div>;
}

export default NavBar;
