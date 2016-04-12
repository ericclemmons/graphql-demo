import React from "react";

export default class Notification extends React.Component {
  render() {
    const { error, type = "danger" } = this.props;

    if (!error) {
      return null;
    }

    return (
      <div class="section">
        <div class="container">
          <div class={`notification is-${type}`}>
            {error.message}
          </div>
        </div>
      </div>
    );
  }
}
