import "./presentation.css";

import React from "react";

import {
  Appear,
  BlockQuote,
  Deck,
  Heading,
  List,
  ListItem,
  Spectacle,
  Slide,
  Text,
} from "spectacle";

import CodeSlide from "spectacle-code-slide";
import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
  primary: "linear-gradient(141deg, rgb(34, 34, 51) 0%, rgb(51, 51, 51) 71%, rgb(85, 68, 68) 100%)",
  secondary: "#ffd",
  tertiary: "#fff",
  quartenary: "#afa",
}, {
  primary: "Futura",
  secondary: "Arial",
  tertiary: "Arial",
  quartenary: "Arial",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={[ "fade" ]} transitionDuration={600}>
          <Slide>
            <Heading fit>GraphQL</Heading>
            <Heading size={3} lineHeight={2} textColor="secondary">Eric Clemmons</Heading>
          </Slide>

          <Slide>
            <Heading fit>
              What is GraphQL?
            </Heading>
          </Slide>

          <CodeSlide
            code={require("!raw!./example.js")}
            lang="js"
            ranges={[
              { loc: [ 0, 13 ], title: "What we want" },
            ]}
            transition={[]}
          />

          <CodeSlide
            code={require("!raw!./example.graphql")}
            lang="js"
            ranges={[
              { loc: [ 0, 13 ], title: "How we get it" },
            ]}
            transition={[]}
          />

          <Slide>
            <Heading lineHeight={1.5}>
              Declarative
            </Heading>
            <BlockQuote>
              Query responses are decided by the client rather than the server. A GraphQL query returns exactly what a client asks for and no more.
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading lineHeight={1.5}>
              Compositional
            </Heading>
            <BlockQuote>
              A GraphQL query itself is a hierarchical set of fields. The query is shaped just like the data it returns. It is a natural way for product engineers to describe data requirements.
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading lineHeight={1.5}>
              Strong-typed
            </Heading>
            <BlockQuote>
              A GraphQL query can be ensured to be valid within a GraphQL type system at development time allowing the server to make guarantees about the response. This makes it easier to build high-quality client tools.
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading fit>
              Why GraphQL?
            </Heading>
          </Slide>

          <Slide>
            <List>
              <ListItem>REST is great for CRUD, not graphs.</ListItem>

              <Appear><ListItem>Client defines <em>only</em> the data it needs.</ListItem></Appear>
              <Appear><ListItem>Client makes a <em>single</em> request.</ListItem></Appear>
              <Appear><ListItem>
                Server is responsible for:

                <List>
                  <Appear><ListItem>Schema</ListItem></Appear>
                  <Appear><ListItem>Querying</ListItem></Appear>
                  <Appear><ListItem>Caching</ListItem></Appear>
                </List>
              </ListItem></Appear>
              <Appear><ListItem>How you fetch the data is up to <em>you</em>.</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgDarken={0.75} bgImage={require("./graphiql.png")}>
            <Heading lineHeight={1.5} fit>Graph<em>i</em>QL</Heading>
            <Text size={3} textColor="secondary">Interactive API & Documentation</Text>
          </Slide>

          <Slide>
            <Heading fit>
              Where can you use GraphQL?
            </Heading>

            <List>
              <Appear><ListItem>JavaScript</ListItem></Appear>
              <Appear><ListItem>Ruby</ListItem></Appear>
              <Appear><ListItem>PHP</ListItem></Appear>
              <Appear><ListItem>Python</ListItem></Appear>
              <Appear><ListItem>Java</ListItem></Appear>
              <Appear><ListItem>Go</ListItem></Appear>
              <Appear><ListItem>&hellip;</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading fit>
              When can you use GraphQL?
            </Heading>
          </Slide>

          <Slide>
            <Heading fit>
              Today.
            </Heading>
          </Slide>

          <Slide>
            <Heading fit>
              How to use GraphQL
            </Heading>
          </Slide>

          <CodeSlide
            code={require("!raw!../../server.js")}
            lang="js"
            ranges={[
              { loc: [ 5, 6 ], title: "Express" },
            ]}
            transition={[]}
          />

          <CodeSlide
            code={require("!raw!../../middleware/api.js")}
            lang="js"
            ranges={[
              { loc: [ 0, 1 ], title: "express-graphql" },
              { loc: [ 4, 5 ], note: "Import a schema" },
              { loc: [ 23, 31 ], note: "Pass /api requests to GraphQL" },
            ]}
            transition={[]}
          />

          <CodeSlide
            code={require("!raw!../../schema/index.js")}
            lang="js"
            ranges={[
              { loc: [ 3, 9 ], title: "schema", note: "query for reads, mutation for writes" },
            ]}
            transition={[]}
          />

          <CodeSlide
            code={require("!raw!../../schema/QueryType.js")}
            lang="js"
            ranges={[
              { loc: [ 12, 17 ], title: "QueryType.js" },
              { loc: [ 18, 26 ], note: "author(id: 1) { ... }" },
              { loc: [ 25, 34 ], note: "Fetching the author #1" },
            ]}
            transition={[]}
          />

          <CodeSlide
            code={require("!raw!../../schema/AuthorType.js")}
            lang="js"
            ranges={[
              { loc: [ 7, 12 ], title: "AuthorType.js" },
              { loc: [ 11, 20 ], note: "Database columns" },
            ]}
            transition={[]}
          />

          <Slide>
            <Heading fit>
              Querying an Author
            </Heading>
          </Slide>

          <Slide bgImage={require("./author.error.png")} align="center flex-end">
            <Heading textColor="black">
              Errors
            </Heading>
          </Slide>

          <Slide bgImage={require("./author.inline.png")} align="center flex-end">
            <Heading textColor="black">
              Inline
            </Heading>
          </Slide>

          <Slide bgImage={require("./author.variables.png")} align="center flex-end">
            <Heading textColor="black">
              Variables
            </Heading>
          </Slide>


          <Slide bgImage={require("./author.fragment.png")} align="center flex-end">
            <Heading textColor="black">
              Fragments
            </Heading>
          </Slide>

          <Slide>
            <Heading lineHeight={1.5}>
              DataLoader
            </Heading>
            <BlockQuote>
              Simple wrapper for fetching & caching queries.
            </BlockQuote>
          </Slide>

          <CodeSlide
            code={require("!raw!../../middleware/api.js")}
            lang="js"
            ranges={[
              { loc: [ 15, 23 ], title: "api", note: "post loader" },
            ]}
            transition={[]}
          />

          <CodeSlide
            code={require("!raw!../../schema/QueryType.js")}
            lang="js"
            ranges={[
              { loc: [ 53, 59 ], title: "QueryType.js", note: "post { ... }" },
              { loc: [ 64, 75 ], note: "posts { ... }" },
            ]}
            transition={[]}
          />

          <CodeSlide
            code={require("!raw!../../schema/MutationType.js")}
            lang="js"
            ranges={[
              { loc: [ 81, 92 ], note: "updatePost(...) { ... }" },
            ]}
            transition={[]}
          />

          <Slide>
            <Heading fit>
              Demo
            </Heading>
          </Slide>

          <Slide>
            <Heading fit>
              Recommended Resources
            </Heading>

            <List>
              <ListItem>learngraphql.com</ListItem>
              <ListItem>github.com/mugli/learning-graphql</ListItem>
              <ListItem>graphql.org</ListItem>
              <ListItem>github.com/chentsulin/awesome-graphql</ListItem>
              <ListItem>github.com/facebook/dataloader</ListItem>
              <ListItem>github.com/matthewmueller/graph.ql</ListItem>
              <ListItem>github.com/graphql/graphql-js</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading lineHeight={1.5}>
              Thanks!
            </Heading>
            <BlockQuote>
              https://github.com/ericclemmons/graphql-demo
            </BlockQuote>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
