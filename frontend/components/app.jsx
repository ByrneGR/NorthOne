import React from "react";
import Navbar from "./nav_bar.jsx"
import AccountForm from "./account_form/account_form.jsx"
import { Link, Route, Redirect} from "react-router-dom";
import SplashPage from "./splash_page.jsx"

const App = () => (
  <div>
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>

    <Route path="/join" component={AccountForm} />
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route path="/home" component={SplashPage} />
  </div>
);

export default App;