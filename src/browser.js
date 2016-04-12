import React from "react";
import { render } from "react-dom";

import { browserHistory, IndexRoute, Route, Router } from "react-router";

import Blog from "./components/Blog";
import Post from "./components/Post";
import PostEditor from "./components/PostEditor";
import Posts from "./components/Posts";
import Users from "./components/Users";

render((
  <Router history={browserHistory}>
    <Route component={Blog} path="/">
      <IndexRoute component={Posts} />

      <Route component={Post} path="/posts/:slug" />
      <Route component={PostEditor} path="/posts/:slug/edit" />
      <Route component={Users} path="/users" />
    </Route>
  </Router>
), document.getElementById("app"));
