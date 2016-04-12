import React from "react";
import { browserHistory } from "react-router";

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

  handleSave = (event) => {
    const title = this.refs.title.value;
    const body = this.refs.body.value;
    const { slug } = this.props.params;

    const query = `
      mutation (
        $title: String!
        $slug: String!
        $body: String!
      ) {
        updatePost(
          title: $title
          slug: $slug
          body: $body
        ) {
          slug
        }
      }
    `;

    const variables = { title, slug, body };

    const options = {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: { "Content-Type": "application/json" },
    };

    fetch("/api", options)
      .then((response) => response.json())
      .then((response) => {
        const { slug } = response.data.updatePost;

        browserHistory.push(`/posts/${slug}`);
      })
      .catch((error) => this.setState({ error }))
    ;

    event.preventDefault();
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
      <div class="section">
        <div class="container">
          <Notification {...error} />

          <div class="card is-fullwidth">
            <header class="card-header">
              <div class="card-content is-fullwidth">
                <p class="control is-grouped">
                  <input
                    class="input"
                    defaultValue={post.title}
                    placeholder="Title"
                    ref="title"
                    type="text"
                  />

                  <a
                    class="button is-primary"
                    onClick={this.handleSave}
                  >
                    Save
                  </a>
                </p>
              </div>
            </header>
            <div class="card-content">
              <p class="control">
                <textarea
                  class="textarea"
                  defaultValue={post.body}
                  placeholder="Textarea"
                  ref="body"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
