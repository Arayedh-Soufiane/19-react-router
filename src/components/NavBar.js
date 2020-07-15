import React from "react";
import { NavLink,} from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar1">
        <ul className="navbar-nav1">
          <li>
            <NavLink exact  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/category">Category</NavLink>
            
          </li>
          <li>  
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin area</NavLink>
          </li>
          {/* <li>
            <NavLink to="/login">login</NavLink>
          </li> */}
         
         
        </ul>
      </nav>
    </div>
  );
}
