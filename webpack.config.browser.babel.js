import { BrowserConfig } from "@terse/webpack";

export default new BrowserConfig()
  .src({
    browser: [ "./src/browser.js" ],
    presentation: [ "./src/presentation.js" ],
  })
  .dest("dist/browser")
  .create()
;
