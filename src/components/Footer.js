import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <footer class="footer" style={{ background: "linear-gradient(141deg, #eee 0%, #eee 71%, #fff 100%)" }}>
        <div class="container">
          <div class="content has-text-centered is-centered">
            <p>
              <a href="http://opensource.org/licenses/mit-license.php">MIT Licensed</a>.
            </p>
            <p class="content has-text-centered">
              <a class="icon" href="https://github.com/ericclemmons">
                <i class="fa fa-github"></i>
              </a>
              <a class="icon" href="https://twitter.com/ericclemmons">
                <i class="fa fa-twitter"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
