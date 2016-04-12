import { ServerConfig } from "@terse/webpack";

export default new ServerConfig()
  .src("src/server.js")
  .dest("dist/server")
  .create()
;
