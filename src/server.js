import { middleware as webpack } from "@terse/webpack";
import express from "express";

import config from "../webpack.config.browser.babel.js";

express()
  .use(webpack(module, config))
  .use(express.static("dist/browser"))
  .get("*", (req, res) => res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta content="IE=edge" http-equiv="X-UA-Compatible">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <title></title>
      </head>
      <body>
        <div id="app"></div>

        <script src="/browser.js"></script>
      </body>
    </html>
  `))
  .listen(3000, "localhost", (err) => {
    if (err) {
      throw err;
    }

    console.info("🌍 Listening at http://localhost:3000/"); // eslint-disable-line
  })
;
