import React from "react";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="head">
      <div className="header">
        <NavLink to="/lists/" className="btn">
          GET LISTS
        </NavLink>
        <NavLink to="/" className="btn">
          HOME
        </NavLink>
      </div>
    </div>
  );
}

export default Main;
