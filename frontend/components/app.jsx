import React from "react";
import Navbar from "./navbar.jsx"
import AccountForm from "./account_form/account_form.jsx"
import { Link, Route} from "react-router-dom";

const App = () => (
  <div>

    <header>
      <nav>
        <Navbar />
      </nav>
    </header>

  <Route path="/join" component={AccountForm} />
  </div>
);

export default App;