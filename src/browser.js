import React from "react";
import { render } from "react-dom";

import { browserHistory, IndexRoute, Route, Router } from "react-router";

import Blog from "./components/Blog";
import Posts from "./components/Posts";
import Users from "./components/Users";

render((
  <Router history={browserHistory}>
    <Route component={Blog} path="/">
      <IndexRoute component={Posts} />

      <Route component={Users} path="users" />
    </Route>
  </Router>

), document.getElementById("app"));
