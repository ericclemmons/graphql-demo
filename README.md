# GraphQL Demo

> A functioning introduction to GraphQL for [Node.js Houston][1]
> – <http://www.meetup.com/NodejsHouston/events/229815892/>


## Goals

- Introduce GraphQL's purpose & benefits.
- Show several iterations of building a GraphQL server.


## Resources

Based on my experience, these are all you need:

0. https://learngraphql.com/
  > Great as a tutorial, but isn't a fantastic reference document.

0. https://github.com/mugli/learning-graphql
  > Fantastic reference document (via code) that even dives into custom types.

0. http://graphql.org/
  > The canonical home of GraphQL, but limited in terms of usefulness.

0. https://github.com/chentsulin/awesome-graphql
  > The de-facto curated list of the GraphQL ecosystem.

0. https://github.com/facebook/dataloader
  > Useful utility for the batching & caching of queries.

0. https://github.com/matthewmueller/graph.ql
  > Faster and simpler technique for creating and querying GraphQL schemas.

0. https://github.com/graphql/graphql-js/
  > The `__tests__` contain several "Star Wars"-themed types

- - -


## What

- Declarative

  > Query responses are decided by the client rather than the server. A GraphQL query returns exactly what a client asks for and no more.

- Compositional

  > A GraphQL query itself is a hierarchical set of fields. The query is shaped just like the data it returns. It is a natural way for product engineers to describe data requirements.

- Strong-typed

  > A GraphQL query can be ensured to be valid within a GraphQL type system at development time allowing the server to make guarantees about the response. This makes it easier to build high-quality client tools.


_Via <http://graphql.org/>._


## Why

- REST is great for CRUD, not graphs.
- Client defines _only_ the data it needs.
- Server defines schema & handles fetching.
- Server is storage-agnostic: how you query the data is up to you.


## Where

- Javascript
  - Express
  - Koa
  - Hapi
- Ruby
- PHP
- Python
- Java
- Go
- Scala
- Elixir


## When

**Today.**


## How

Included in this project are several, functioning steps that illustrate
how to get started & refine your GraphQL implementation.


```shell
$ nvm use
$ npm install
$ npm run 1
```


[0]: http://www.meetup.com/NodejsHouston/
