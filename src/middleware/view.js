import express from "express";

export default express.Router()
  .get("*", (req, res) => {
    const entry = (req.path === "/presentation") ? "presentation" : "browser";

    res.send(`
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

          <script src="/${entry}.js"></script>
        </body>
      </html>
    `);
  })
;
