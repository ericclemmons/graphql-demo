import { BrowserConfig } from "@terse/webpack";

export default new BrowserConfig()
  .src("src/browser.js")
  .dest("dist/browser")
  .create()
;
