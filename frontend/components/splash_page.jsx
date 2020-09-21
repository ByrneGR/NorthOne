import React from "react";
import Navbar from "./nav_bar.jsx";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>NorthOne: Banking for Small Businesses and Freelancers</title>
          <meta name="description" content="NorthOne is a bank account that helps small businesses save time and money. We empower you to take control of your finances."/>          
        </Helmet>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <div className="lower_splash">
          <div>
          <h1 id="splash_h1">
            <span>America's</span>
            <br></br>
            <span>Challenger Bank</span>
          </h1>
          <p id="proudly_made" className="splash_desc">
            <span>Proudly made for small businesses,</span>
            <br></br>
            <span>startups, and freelancers.</span>
          </p>
          <Link  className="form_btn" to={"/join"}>
            Open an Account
          </Link>
            <p id="trusted_by" className="splash_desc">Trusted by 132963 business builders</p>
        </div>
        <div>
            <img id="credit_card_img" src={window.credit_card} />
        </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;