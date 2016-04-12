import { middleware as webpack } from "@terse/webpack";
import express from "express";

import config from "../webpack.config.browser.babel.js";

import api from "./middleware/api";
import files from "./middleware/files";
import view from "./middleware/view";

express()
  .use(files)
  .use(webpack(module, config))
  .use(api)
  .use(view)
  .listen(3000, "localhost", (err) => {
    if (err) {
      throw err;
    }

    console.info("🌍 Listening at http://localhost:3000/"); // eslint-disable-line
  })
;
