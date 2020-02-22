import React from "react";
import { Form } from "./Form";
import { List } from "./List";
import { User } from "./User";
import { AuthProvider } from "./Auth";
import "firebase/auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path={"/list"} component={List} />
          <Route exact path={"/"} component={Form} />
          <Route exact path={"/form"} component={Form} />
          <Route
            exact
            path="/user/:id"
            render={props => <User {...props.match.params} />}
          />
          <Route exact path={"/login"} component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
};