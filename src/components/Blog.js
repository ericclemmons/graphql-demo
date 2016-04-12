import "bulma/css/bulma.css";

import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <Header {...this.props} />

        {this.props.children}

        <Footer />
      </div>
    );
  }
}
