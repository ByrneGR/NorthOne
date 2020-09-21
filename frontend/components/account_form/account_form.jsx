import React from "react";
import { Link, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password_digest: "",
      birthdate: ""
    }
   this.handleInput = this.handleInput.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);    
  }


  handleInput(type) { return e => {
    debugger
    this.setState({[type]: e.currentTarget.value})
    }
  }  

  handleSubmit(e) {
    e.preventDefault()
    const account = Object.assign({}, this.state)
    this.props.createAccount({account}).
    then(document.location.href='#/thank_you')
  }

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
        <div className="lower_splash">
          <div className="campaign-form-parent">
          <h1>Open a Northone Bank Account</h1>
            <form className="account-form" id="account-form1">
              <label className="input_label">Email
              <input type="text"  onChange={this.handleInput("email")}/>
              </label>
              <label className="input_label">Password
              <input type="text"  onChange={this.handleInput("password_digest")}/>
              </label>
              <label className="input_label">First Name
              <input type="text"  onChange={this.handleInput("first_name")}/>
              </label>
              <label className="input_label">Last Name
              <input type="text"  onChange={this.handleInput("last_name")}/>
              </label>
              <label className="input_label">Birthday
              <input type="text"  onChange={this.handleInput("birthdate")}/>
              </label>
              <button
                className="btn-formp1"
                onClick={this.handleSubmit}
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountForm;