import React from "react";
import { Link } from "react-router-dom";



export default () => {

  return (
    <div className="topnav">
      <div className="left_nav">
        <img id="logo_icon" src={window.logo_icon} />
        <Link to="" id="northone_nav">NorthOne</Link>
      </div>
      <div id="right_nav">
        <Link className="form_btn" to={'/join'}>Open an Account</Link>
      </div>
    </div>
  );
};