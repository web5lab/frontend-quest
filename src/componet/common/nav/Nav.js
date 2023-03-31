import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
// import { BsDiscord, BsTwitter } from "react-icons/bs";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";

class Nav extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div className="startdivNav">
        <ul id="list" className={this.state.clicked ? "#list active" : "#list"}>
          <li>
            <NavLink to="/login" className="navbar">
              Set Up Quest
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyQuest" className="navbar">
              Explore Quest
            </NavLink>
          </li>

          <li>
            <NavLink className="navbarBtn">
              <DynamicContextProvider
                settings={{
                  environmentId: "cf2ed575-790e-4904-a493-47e429ffe4e8",
                }}
              >
                <DynamicWidget />
              </DynamicContextProvider>
            </NavLink>
          </li>
        </ul>
        <div className="icon" onClick={this.handleclick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </div>
    );
  }
}

export default Nav;
