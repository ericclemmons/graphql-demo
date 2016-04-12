import React from "react";

export default class Notification extends React.Component {
  render() {
    const { message, type = "danger" } = this.props;

    if (!message) {
      return null;
    }

    return (
      <div class="section">
        <div class="container">
          <div class={`notification is-${type}`}>
            {message}
          </div>
        </div>
      </div>
    );
  }
}
