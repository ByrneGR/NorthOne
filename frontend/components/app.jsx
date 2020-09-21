import React from "react";
import Navbar from "./nav_bar.jsx"
import AccountFormContainer from "./account_form/account_form_container.jsx"
import { Link, Route, Redirect} from "react-router-dom";
import SplashPage from "./splash_page.jsx"
import ThankYouPage from "./thank_you.jsx"

const App = () => (
  <div>

    <Route path="/join" component={AccountFormContainer} />
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route path="/home" component={SplashPage} />
    <Route path="/thank_you" component={ThankYouPage} />
  </div>
);

export default App;