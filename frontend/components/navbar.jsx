import React from "react";
import { Link, Route } from "react-router-dom";



export default () => {

  return (
    <div className="topnav">
      <div id="left_nav">
        <img id="logo_icon" src={window.logo_icon} />
        <a id="northone_nav">NorthOne</a>
      </div>
      <div id="right_nav">
        <Link id="form_btn" to={'/join'}>Open an Account</Link>
      </div>
    </div>
  );
};