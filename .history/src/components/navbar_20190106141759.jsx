import React, { Component } from "react";

class NavBar extends Component {
  //state = {};
  
}
const NavBar=(props)=>{
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Cart by React{" "}
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </a>
      </nav>
    );
export default NavBar;
