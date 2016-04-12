import marked from "marked";
import React from "react";
import { Link } from "react-router";

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
      .then((response) => this.setState({
        error: null,
        post: response.data.post,
      }))
      .catch((error) => this.setState({ error }))
    ;
  }

  render() {
    const { error, post } = this.state;

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
        <Notification {...error} />

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
        </div>
      </section>
    );
  }
}
