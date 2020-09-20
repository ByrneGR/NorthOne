import React from "react";
import { Link, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

class AccountForm extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Join NorthOne</title>
        </Helmet>
        <div id="form_nav" className="left_nav">
          <img id="logo_icon" src={window.logo_icon} />
          <Link to="" id="northone_nav">
            NorthOne
          </Link>
        </div>
        This is the account form.
      </div>
    );
  }
}

export default AccountForm;