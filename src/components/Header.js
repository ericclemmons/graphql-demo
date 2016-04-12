import classNames from "classnames";
import React from "react";

import { Link } from "react-router";

export default class Header extends React.Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <section class="hero is-info is-left is-bold" style={{ background: "linear-gradient(141deg, #223 0%, #333 71%, #544 100%)" }}>
        <div class="hero-header">
          <header class="header">
            <div class="container">
              <div class="header-left">
                <Link class="header-item" to="/">
                  <h3 class="title">
                    GraphQL
                  </h3>
                </Link>
              </div>

              <div class="header-right header-menu">
                <span class="header-item">
                  <a class="button is-info is-outlined is-inverted" href="https://github.com/ericclemmons/graphql-demo">
                    <span class="icon">
                      <i class="fa fa-github"></i>
                    </span>
                    <span>GitHub</span>
                  </a>
                </span>

                <span class="header-item">
                  <Link class="button is-secondary" to={`/posts/new`}>
                    <i class="fa fa-plus" />&nbsp;New Post
                  </Link>
                </span>
              </div>
            </div>
          </header>
        </div>

        <div class="hero-content">
          <div class="container">
            <h1 class="title">
              Blog Demo
            </h1>

            <p class="subtitle">
              {`Presented at `}
              <a class="is-outlined" href="http://www.meetup.com/NodejsHouston/events/229815892/">
                Node.js Houston
              </a>
            </p>
          </div>
        </div>

        <div class="hero-footer">
          <div class="tabs is-boxed">
            <div class="container">
              <ul>
                <li class={classNames({ "is-active": pathname === "/" })}>
                  <Link to="/">
                    <i class="fa fa-file-text"></i> Posts
                  </Link>
                </li>

                <li class={classNames({ "is-active": pathname === "/api" })}>
                  <a href="/api" target="_blank">
                    <i class="fa fa-code"></i> API
                  </a>
                </li>

                <li class={classNames({ "is-active": pathname === "/presentation" })}>
                  <a href="/presentation" target="_blank">
                    <i class="fa fa-desktop"></i> Presentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
