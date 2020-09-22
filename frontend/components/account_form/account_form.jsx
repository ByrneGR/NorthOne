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
    this.props
      .createAccount({ account })
      .then(
        window.dataLayer.push({
          event: "formSubmissionSuccess",
          formId: "contactForm",
        })
      )
      .then((document.location.href = "#/thank_you"));  

  }



  render() {
    const fiveReasonsStyle = {
      backgroundColor: "rgb(192, 192, 245)",
      borderRadius: "5px",
      padding: "15px"
    };
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
          <div className="account-form-parent">
            <h1 className="north_h1">Open a Bank Account</h1>
            <form className="account-form" id="account-form1">
              <div id="email_input_container">
                <label className="input_label">
                  Email<br></br>
                  <input type="text" onChange={this.handleInput("email")} />
                </label>
              </div>
              <label className="input_label">
                Password<br></br>
                <input
                  type="text"
                  onChange={this.handleInput("password_digest")}
                />
              </label>
              <label className="input_label">
                First Name<br></br>
                <input type="text" onChange={this.handleInput("first_name")} />
              </label>
              <label className="input_label">
                Last Name<br></br>
                <input type="text" onChange={this.handleInput("last_name")} />
              </label>
              <label className="input_label">
                Birthday<br></br>
                <input type="text" onChange={this.handleInput("birthdate")} />
              </label>
              <btn className="btn-formp1" onClick={this.handleSubmit}>
                Create Account
              </btn>
            </form>
          </div>
          <div style={fiveReasonsStyle} id="5_reasons_container">
            <h2 className="5_reasons_header">5 Reasons You'll Love NorthOne</h2>
            <ol className="ordered_list">
              <li>Instant support from real human beings</li>
              <li>Save up to 50% on bookkeeping</li>
              <li>Intuitive financial reporting dashboards</li>
              <li>Affordable pricing</li>
              <li>Never step foot in a branch again</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountForm;