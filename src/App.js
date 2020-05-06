import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Route, Switch ,Redirect } from "react-router-dom";
import RegisterForm from "./components/register/registerForm";
import LoginForm from "./components/login/loginForm";
import ResetPassword from "./components/reset-password/resetPassword";
import UserProfile from "./components/userProfile";
import "./App.css";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={RegisterForm}></Route>
          <Route exact path="/register" component={RegisterForm}></Route>
          <Route exact path="/login" component={LoginForm}></Route>
          <Route exact path="/reset-password" component={ResetPassword}></Route>
          <Route exact path="/user-profile" component={UserProfile}></Route>
          <Redirect from='/' to='/register' />
        </Switch>
      </Router>
      <NotificationContainer />
    </div>
  );
}

export default App;
