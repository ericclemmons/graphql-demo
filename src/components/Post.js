import marked from "marked";
import React from "react";
import { browserHistory, Link } from "react-router";

import Notification from "./Notification";

export default class Post extends React.Component {
  constructor() {
    super();

    this.state = {
      error: null,
      post: null,
    };
  }

  componentWillMount() {
    const query = `
      query ($slug: String!) {
        post(slug: $slug) {
          title
          slug
          body

          author {
            name
            email
          }

          lastUpdated
        }
      }
    `;

    const { slug } = this.props.params;
    const variables = { slug };

    const options = {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: { "Content-Type": "application/json" },
    };

    fetch("/api", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          throw new Error(response.errors[0].message);
        }

        this.setState({
          error: null,
          post: response.data.post,
        });
      })
      .catch((error) => this.setState({ error }))
    ;
  }

  handleDelete = (event) => {
    const query = `
      mutation ($slug: String!) {
        deletePost(slug: $slug)
      }
    `;

    const { slug } = this.state.post;
    const variables = { slug };

    const options = {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: { "Content-Type": "application/json" },
    };

    fetch("/api", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          throw new Error(response.errors[0].message);
        }

        browserHistory.push("/");
      })
      .catch((error) => this.setState({ error }))
    ;

    event.preventDefault();
  }

  render() {
    const { error, post } = this.state;

    if (error) {
      return (
        <section class="section">
          <div class="container">
            <Notification error={error} />
          </div>
        </section>
      );
    }

    if (!post) {
      return (
        <div class="section">
          <div class="container">
            <i class="fa fa-cog fa-spin fa-3x fa-fw" />
          </div>
        </div>
      );
    }

    return (
      <section class="section">
        <div class="container">
          <Link class="button is-pulled-right" to={`/posts/${post.slug}/edit`}>
            <i class="fa fa-edit" />&nbsp;Edit
          </Link>

          <div class="heading">
            <h1 class="title">
              {post.title}
            </h1>
            <h2 class="subtitle">
              {post.lastUpdated}
            </h2>
          </div>

          <div class="content" dangerouslySetInnerHTML={{ __html: marked(post.body) }} />

          <hr />

          <a class="button is-danger is-pulled-right" onClick={this.handleDelete}>
            <i class="fa fa-times" />&nbsp;Delete
          </a>
        </div>
      </section>
    );
  }
}
