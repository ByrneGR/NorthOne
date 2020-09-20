import React from "react";
import Navbar from "./nav_bar.jsx";
import { Link } from "react-router-dom";
class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <div className="lower_splash">
          <h1 id="splash_h1">
            <span>America's</span>
            <br></br>
            <span>Challenger Bank</span>
          </h1>
          <p>
            <span>Proudly made for small businesses,</span>
            <br></br>
            <span>startups, and freelancers.</span>
          </p>
          <Link className="form_btn" to={"/join"}>
            Open an Account
          </Link>
          <p>Trusted by 132963 business builders</p>
          <div id="bank_benefits">
            <h2>
              <span>A better bank account</span><br></br>
              <span>for your business</span>
              <div id="benefits_list">
                <span>Government insured bank account*</span>
                <span>Payments made easy</span>
                <span>ATM deposit and withdrawl</span>
                <span>Banking for teams</span>
                <span>Company debit cards</span>
                <span>Routing and account numbers</span>
                <span>Mobile check deposits</span>
                <span>Live-chat support</span>
              </div>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;