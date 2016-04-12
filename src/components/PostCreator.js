import React from "react";
import { browserHistory } from "react-router";

import Editor from "./Editor";
import Notification from "./Notification";

export default class PostCreator extends React.Component {
  constructor() {
    super();

    this.state = {
      error: null,
    };
  }

  componentDidMount() {
    this.refs.title.focus();
  }

  handleSave = (event) => {
    const title = this.refs.title.value;
    const body = this.refs.editor.getValue();

    const query = `
      mutation (
        $title: String!
        $body: String!
      ) {
        createPost(
          title: $title
          body: $body
        ) {
          slug
        }
      }
    `;

    const variables = { title, body };

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

        const { slug } = response.data.createPost;

        browserHistory.push(`/posts/${slug}`);
      })
      .catch((error) => this.setState({ error }))
    ;

    event.preventDefault();
  }

  render() {
    const { error } = this.state;

    return (
      <div class="section">
        <div class="container">
          <div class="heading">
            <h1 class="title">New Post</h1>
          </div>

          <Notification error={error} />

          <div class="card is-fullwidth">
            <header class="card-header">
              <div class="card-content is-fullwidth">
                <p class="control is-grouped">
                  <input
                    class="input"
                    placeholder="Title"
                    ref="title"
                    type="text"
                  />

                  <a
                    class="button is-primary"
                    onClick={this.handleSave}
                  >
                    Create
                  </a>
                </p>
              </div>
            </header>
            <div class="card-content">
              <Editor ref="editor" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
